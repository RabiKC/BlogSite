import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="page-header">
      <div className="page-navbar">
        <div className="page-logo">
          <NavLink to="/">
            {/* Leckerli One  */}
            <img src="android-chrome-512x512.png" alt="" />
          </NavLink>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
