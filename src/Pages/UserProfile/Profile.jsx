import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./profile.css";

const Profile = () => {
  const usersUrl = "http://localhost:8000/users";

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();

  const getUsers = () => {
    setLoading(true);
    try {
      fetch(usersUrl)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const user = users && users.find((u) => u.id === parseInt(userId));

  user && console.log(user);

  return (
    <main className="profile-page">
      {user && (
        <>
          <section className="user-profile-section">
            <section
              className="section backdrop-section"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${user.profileBackdrop})`,
              }}
            ></section>
            <section className="user-info-section">
              <div className="section-wrapper profile-wrapper">
                <div className="profile-left">
                  <img
                    src={user.profileCardImg}
                    alt={user.name}
                    className="profile-img"
                  />
                </div>
                <div className="profile-right">
                  <h1 className="profile-name">{user.name}</h1>
                  <h2 className="profile-username">{user.username}</h2>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </h3>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </main>
  );
};

export default Profile;
