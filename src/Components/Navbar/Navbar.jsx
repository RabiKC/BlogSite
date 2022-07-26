import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { values } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState("dropdown");
  const dropdownRef = useRef();

  const dropdownToggle = () => {
    dropdown === "dropdown"
      ? setDropdown("dropdown visible")
      : setDropdown("dropdown");
  };

  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!dropdownRef.current.contains(event.target)) {
  //       setDropdown("dropdown");
  //     }
  //   };

  //   document.addEventListener("click", handler, !dropdown);

  //   return () => {
  //     document.removeEventListener("click", handler, !dropdown);
  //   };
  // });

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
          <div className="logged-user">
            <div onClick={dropdownToggle}>
              <img src="./user.png" alt={values.user.username} />
              <span>
                {values.user.firstName} {values.user.lastName}
              </span>
            </div>
            <div className={dropdown} ref={dropdownRef}>
              <Link to="#">Profile</Link>
              <button onClick={values.logout}>Log out</button>
            </div>
          </div>
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
