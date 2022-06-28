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
        <section
          className="section user-detail-section"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${user.profileBackdrop})`,
          }}
        >
          <div className="section-wrapper backdrop-wrapper">
            <div>
              <h1>{user.name}</h1>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Profile;
