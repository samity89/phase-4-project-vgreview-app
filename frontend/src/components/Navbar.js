import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink exact="true" to="/"> Home </NavLink>
    <NavLink exact="true" to="/reviews"> Reviews </NavLink>
    {/* <NavLink exact="true" to="/"></NavLink> */}
    {/* <NavLink exact="true" to="/my_profile"></NavLink> */}
  </div>
)}

export default NavBar;
