import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import VGForm from "./VGForm";
import { UserContext } from "./UserContext";

function Home({ 
    videogames,
    setVideogames,
    reviews,
    setReviews
}) {
  const { user, setUser } = useContext(UserContext)

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
        reviews={reviews}
        setReviews={setReviews}
        navigate={navigate}
      /><hr></hr>
      <VGForm
        videogames={videogames}
        setVideogames={setVideogames}
        navigate={navigate}
      />
        <br></br><br></br>
      <button onClick = {() => handleDeleteUser(user.id)}>delete my account and all of my reviews</button>
    </div>
    )
    
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
  
  
}

export default Home;
