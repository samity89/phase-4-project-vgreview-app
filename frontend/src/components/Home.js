import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import VGForm from "./VGForm";

function Home({
    user, 
    setUser, 
    videogames, 
    setReviews, 
    formData,
    handleFormSubmit,
    handleTitleChange,
    handleGameChange,
    handleRatingChange,
    handleBodyChange,
    handleGameFormSubmit,
    handleVGNameChange,
    handleVGDeveloperChange,
    handleVGGenreChange,
    handleVGReleaseDateChange,
    handleVGImageURLChange,
    handleVGPlatformChange, 
}) {
  
  const navigate = useNavigate()
  function handleDeleteUser (id) {
    fetch(`users/${id}#destroy`, {method: "DELETE"}).then((r) => r.json())
    .then(setUser(null))
    .then(navigate("/"))
  }
  
  
  
  
  if (user) {
    return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <ReviewForm 
        videogames={videogames} 
        handleFormSubmit={handleFormSubmit}
        handleTitleChange={handleTitleChange}
        handleGameChange={handleGameChange}
        handleRatingChange={handleRatingChange}
        handleBodyChange={handleBodyChange}
        navigate={navigate}
      /><hr></hr>
      <VGForm
        handleGameFormSubmit={handleGameFormSubmit}
        handleVGNameChange={handleVGNameChange}
        handleVGDeveloperChange={handleVGDeveloperChange}
        handleVGGenreChange={handleVGGenreChange}
        handleVGReleaseDateChange={handleVGReleaseDateChange}
        handleVGImageURLChange={handleVGImageURLChange}
        handleVGPlatformChange={handleVGPlatformChange}
        navigate={navigate}
      />
      <hr></hr>
        <br></br><br></br>
      <button onClick = {() => handleDeleteUser(user.id)}>delete my account and all of my reviews</button>
    </div>
    )
    
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
  
  
}

export default Home;
