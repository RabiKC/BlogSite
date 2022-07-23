import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

const Form = () => {
  const [type, setType] = useState("password");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchSignup = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    // .then((res) => res.json())
    // .then((data) => console.log(data));

    const response = fetchSignup;

    console.log(response);
    console.log(response.ok);

    if (response.ok === true) {
      setMessage("Your account has been successfully created.");
    } else {
      setMessage("Something went wrong");
    }
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const seePassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  if (message) {
    setTimeout(() => {
      setMessage("");
    }, 4000);
  }

  return (
    <div className="form-wrapper">
      <h1>Sign-Up </h1>
      <form onSubmit={handleSubmit}>
        <div className="name-wrapper">
          <div className="input-wrapper">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-wrapper">
          <input
            type={type}
            name="password"
            id="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="password"> Password</label>
          {type === "password" ? (
            <BsEyeSlashFill onClick={seePassword} />
          ) : (
            <BsEyeFill onClick={seePassword} />
          )}
        </div>
        <div className="input-wrapper">
          <input type={type} name="re-password" id="re-password" required />
          <label htmlFor="re-password"> Re-type Password</label>
          {type === "password" ? (
            <BsEyeSlashFill onClick={seePassword} />
          ) : (
            <BsEyeFill onClick={seePassword} />
          )}
        </div>
        <input type="submit" value="Sign up" />
        {message && <span>{message}</span>}
      </form>
      <span className="or-divider">Or</span>
      <div className="social-login-links">
        <div className="google">
          <img src="google-logo.png" alt="Google" />
          <span>Sign In with Google</span>
        </div>
        <div className="facebook">
          <img src="facebook-logo.png" alt="Facebook" />
          <span>Sign In with Facebook</span>
        </div>
        <div className="facebook">
          <img src="twitter-logo.png" alt="Twitter" />
          <span>Sign In with Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
