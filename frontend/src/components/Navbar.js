import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
  <header>
  <div className="navbar">
    <NavLink exact="true" to="/"> Home |</NavLink>
    <NavLink exact="true" to="/videogames"> Videogames |</NavLink>
    <NavLink exact="true" to="/reviews"> Reviews </NavLink>
  </div>
  <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <NavLink exact="true" to="/signup"> Signup |</NavLink>
            <NavLink exact="true" to="/login"> Login </NavLink>
          </>
        )}
      </div>
  </header>
)}

export default NavBar;
