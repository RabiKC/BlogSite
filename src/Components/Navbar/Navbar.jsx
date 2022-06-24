import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="page-header">
      <div className="page-navbar">
        <div className="page-logo">
          <NavLink to="/">BlogSpot</NavLink>
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