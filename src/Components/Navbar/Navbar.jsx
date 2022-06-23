import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="page-navbar">
      <div className="page-logo">BlogSpot</div>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
