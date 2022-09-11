import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const { values } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState("dropdown");
  const dropdownRef = useRef();

  const dropdownToggle = () => {
    dropdown === "dropdown"
      ? setDropdown("dropdown visible")
      : setDropdown("dropdown");
  };

  const clickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setDropdown("dropdown");
    }
  };

  // Do something after component renders
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);

    // clean up function before running new effect
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [dropdown]);

  return (
    <header className="page-header">
      <div className="page-navbar">
        <div className="page-logo">
          <NavLink to="/">
            {/* Leckerli One  */}
            <img src="android-chrome-512x512.png" alt="Blogspot Logo" />
          </NavLink>
        </div>
        <form className="search-form">
          <input
            type="search"
            name="search"
            id="searchBtn"
            placeholder="Search..."
          />
          <button className="search-btn" type="submit">
            <BsSearch />
          </button>
        </form>
        {values.user ? (
          <div className="logged-user" ref={dropdownRef}>
            <div onClick={dropdownToggle}>
              <img src="./user.png" alt={values.user.username} />
              <span>
                {values.user.firstName} {values.user.lastName}
              </span>
            </div>
            <div className={dropdown}>
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
