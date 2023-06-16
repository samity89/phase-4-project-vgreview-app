import {React, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./Navbar";
import Home from "./Home";
import Reviews from "./Reviews";
import SignUp from "./SignUp";
import Login from "./Login";
import './App.css';

function App () {
  const [reviews, setReviews] = useState("")
  const [user, setUser] = useState(null)
  

  useEffect(() => {
    fetch("/reviews")
    .then((response) => response.json())
    .then((response) => setReviews(response));
    fetch("/me").then((response) => {
      if (response.okay) {
        response.json().then((user) => setUser(user));
      }
    });
    }, [])  
  

  return (
    <div className="App">
      <h1>VGREVIEWS</h1>
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
          <Route path="/reviews" element={<Reviews reviews={reviews} setReviews={setReviews} user={user}/>}/>
          <Route path="/signup" element={<SignUp setUser={setUser}/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;