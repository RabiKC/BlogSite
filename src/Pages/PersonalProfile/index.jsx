import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const PersonalProfile = () => {
  const { values } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    location: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();

    const fetchUserDetails = await fetch(
      `http://localhost:8000/users/${values.user.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="input-wrapper">
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <label htmlFor="gender">Gender</label>
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="gender">Password</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalProfile;
