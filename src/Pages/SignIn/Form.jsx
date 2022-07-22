import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import AuthContext from "../../context/AuthContext";

const Form = () => {
  const [type, setType] = useState("password");

  const { values } = useContext(AuthContext);

  const seePassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const removeError = () => {
    values.setError("");
  };

  return (
    <div className="form-wrapper">
      <h1>Sign-In </h1>
      <form onSubmit={values.handleSubmit}>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            id="email"
            onClick={removeError}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-wrapper">
          <input
            type={type}
            name="password"
            id="password"
            onClick={removeError}
            required
          />
          <label htmlFor="password"> Password</label>
          {type === "password" ? (
            <BsEyeSlashFill onClick={seePassword} />
          ) : (
            <BsEyeFill onClick={seePassword} />
          )}
        </div>
        <div className="extra-options">
          <div className="remember-me-wrapper">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              value="remember"
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <Link to="#" className="forgot-password">
            Forgot password?
          </Link>
        </div>
        {values.error && <span>{values.error}</span>}
        <input type="submit" value="Sign in" />
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
      <div className="suggest-signup">
        <span>Don't have an account? </span>
        <Link to="/sign-up" className="signup-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Form;
