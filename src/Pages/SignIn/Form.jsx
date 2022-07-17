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
          <input type="text" />
          <label>Username</label>
        </div>
        <div className="input-wrapper">
          <input type="password" name="password" id="password" />
          <label> Password</label>
        </div>
        <input type="submit" value="Sign-In" />
      </form>
    </div>
  );
};

export default Form;
