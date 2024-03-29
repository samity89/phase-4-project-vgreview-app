import {React, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext } from "./UserContext";
import NavBar from "./Navbar";
import Home from "./Home";
import Videogame from "./Videogame";
import Videogames from "./Videogames";
import SignUp from "./SignUp";
import Login from "./Login";
import './App.css';

function App () {
  const [videogames, setVideogames] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/videogames")
    .then((r) => r.json())
    .then((r) => setVideogames(r));
    fetch("/me").then((r) => {
      if (r.okay) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  return (
    <div className="App">
      <img src={require('./logo.png')} alt="VGREVIEWS"/>
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={
            <UserContext.Provider value={{user, setUser}}>
            <Home 
            videogames={videogames}
            setVideogames={setVideogames}/>
            </UserContext.Provider>
          }/>
          <Route path="/videogames" element={
            <UserContext.Provider value={{user, setUser}}>
            <Videogames 
            videogames={videogames}
            setVideogames={setVideogames}/>
            </UserContext.Provider>
          }/>
          <Route path="/videogames/:id" element={
            <UserContext.Provider value={{user, setUser}}>
            <Videogame
            videogames={videogames}
            setVideogames={setVideogames}/>
            </UserContext.Provider>
          }/>
          <Route path="/signup" element={
          <UserContext.Provider value={{user, setUser}}>
          <SignUp/>
          </UserContext.Provider>
        }/>
          <Route path="/login" element={
            <UserContext.Provider value={{user, setUser}}>
            <Login/>
            </UserContext.Provider>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;