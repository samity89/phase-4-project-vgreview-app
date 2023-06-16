import React from "react";
import { useNavigate } from "react-router-dom";

function Home({user, setUser}) {
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
      <h3>delete account</h3>
      <button onClick = {() => handleDeleteUser(user.id)}>delete my account and all of my reviews</button>
    </div>
    )
    
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
  
  
}

export default Home;
