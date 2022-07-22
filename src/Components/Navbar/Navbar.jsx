import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { values } = useContext(AuthContext);

  return (
    <header className="page-header">
      <div className="page-navbar">
        <div className="page-logo">
          <NavLink to="/">
            {/* Leckerli One  */}
            <img src="android-chrome-512x512.png" alt="Blogspot Logo" />
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
        {values.user ? (
          <span>{values.user.firstName}</span>
        ) : (
          <div className="user-action-links">
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
