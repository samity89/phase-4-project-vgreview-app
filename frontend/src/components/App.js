import {React, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./Navbar";
import Home from "./Home";
import Videogame from "./Videogame";
import Videogames from "./Videogames";
import Reviews from "./Reviews";
import SignUp from "./SignUp";
import Login from "./Login";
import './App.css';

function App () {
  const [reviews, setReviews] = useState([])
  const [videogames, setVideogames] = useState([])
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    user_id: null,
    videogame_id: null,
    rating: "",
    body: "",
  });
  const [videogameForm, setVideogameForm] = useState({
    name: "",
    developer: "",
    release_date: "",
    genre: "",
    image_url: "",
    platform: "",
  })

  useEffect(() => {
    fetch("/reviews")
    .then((response) => response.json())
    .then((response) => setReviews(response));
    fetch("/videogames")
    .then((response) => response.json())
    .then((response) => setVideogames(response));
    fetch("/me").then((response) => {
      if (response.okay) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])  
  
  function handleFormSubmit (event) {
    event.preventDefault()
    fetch(`reviews/#create`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
          "title": formData.title,
          "user_id": user.id,
          "videogame_id": formData.videogame_id,
          "rating": formData.rating,
          "body": formData.body,
        })
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((newReview) => handleAddReview(newReview))
      }
      
  function handleAddReview(newReview) {
    setReviews([...reviews, newReview])
  }    
  
  function handleTitleChange(event) {
    setFormData({...formData, title: event.target.value})
  }
  
  function handleGameChange(event) {
    setFormData({...formData, videogame_id: event.target.value})
  }

  function handleRatingChange(event) {
    setFormData({...formData, rating: event.target.value})
  }

  function handleBodyChange(event) {
    setFormData({...formData, body: event.target.value})
  }

  function handleGameFormSubmit (event) {
    event.preventDefault()
    fetch(`videogames/#create`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
          "name": videogameForm.name,
          "developer": videogameForm.developer,
          "release_date": videogameForm.release_date,
          "genre": videogameForm.genre,
          "image-url": videogameForm.image_url,
          "platform": videogameForm.platform
        })
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((newGame) => handleAddGame(newGame))
      }

  function handleAddGame(newGame) {
    setVideogames([...videogames, newGame])
  }
  
  function handleVGNameChange(event) {
    setVideogameForm({...videogameForm, name: event.target.value})
  }
  
  function handleVGReleaseDateChange (event) {
    setVideogameForm({...videogameForm, release_date: event.target.value})
  }
  
  function handleVGDeveloperChange(event) {
    setVideogameForm({...videogameForm, developer: event.target.value})
  }

  function handleVGGenreChange(event) {
    setVideogameForm({...videogameForm, genre: event.target.value})
  }

  function handleVGImageURLChange(event) {
    setVideogameForm({...videogameForm, image_url: event.target.value})
  }

  function handleVGPlatformChange(event) {
    setVideogameForm({...videogameForm, platform: event.target.value})
  }
  
  return (
    <div className="App">
      <img src={require('./logo.png')} alt="VGREVIEWS"/>
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home 
            user={user} 
            setUser={setUser} 
            videogames={videogames}
            setVideogames={setVideogames}
            setReviews={setReviews}
            formData={formData}
            handleFormSubmit={handleFormSubmit}
            handleTitleChange={handleTitleChange}
            handleGameChange={handleGameChange}
            handleRatingChange={handleRatingChange}
            handleBodyChange={handleBodyChange}
            videogameForm={videogameForm}
            handleGameFormSubmit={handleGameFormSubmit}
            handleVGNameChange={handleVGNameChange}
            handleVGDeveloperChange={handleVGDeveloperChange}
            handleVGGenreChange={handleVGGenreChange}
            handleVGReleaseDateChange={handleVGReleaseDateChange}
            handleVGImageURLChange={handleVGImageURLChange}
            handleVGPlatformChange={handleVGPlatformChange}/>
            }/>
          <Route path="/videogames" element={<Videogames 
            videogames={videogames}
            setVideogames={setVideogames}/>
          }/>
          {/* <Route path="/videogames/:id" element={<Videogame 
            videogames={videogames}/>
          }/> */}
          <Route path="/reviews" element={<Reviews 
            reviews={reviews} 
            setReviews={setReviews} 
            user={user}/>}
          />
          <Route path="/signup" element={<SignUp setUser={setUser}/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;