import React from "react";

const PersonalProfile = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="input-wrapper">
          <input type="text" name="location" id="location" />
          <label htmlFor="">Location</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalProfile;
