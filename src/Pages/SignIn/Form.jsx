import React from "react";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <h1>Sign-In </h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <input type="text" name="username" id="username" required />
          <label for="username">Username</label>
        </div>
        <div className="input-wrapper">
          <input type="password" name="password" id="password" required />
          <label for="password"> Password</label>
        </div>
        <input type="submit" value="Sign-In" />
      </form>

      <span>Forgot password?</span>
      <span>Don't have an account?</span>
    </div>
  );
};

export default Form;
