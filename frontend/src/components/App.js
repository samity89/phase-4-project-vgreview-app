import {React, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./Navbar";
import Home from "./Home";
import Reviews from "./Reviews";
import './App.css';

function App () {
  const [reviews, setReviews] = useState("")
  

  useEffect(() => {
    fetch("/reviews")
    .then((response) => response.json())
    .then((response) => setReviews(response))
    }, [])  
  

  return (
    <div className="App">
      <h1>VGREVIEWS</h1>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/reviews" element={<Reviews reviews={reviews} setReviews={setReviews}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;