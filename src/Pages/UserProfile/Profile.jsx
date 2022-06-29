import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BsGeoAltFill,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Sidebar from "./Sidebar";
import Main from "./Main";

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
      setLoading(false);
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
    <>
      {loading ? (
        <div className="loading-section">Loading...</div>
      ) : (
        <main className="profile-page">
          {user && (
            <>
              <section className="user-profile-section">
                <section
                  className="section backdrop-section"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,.85)), url(${user.profileBackdrop})`,
                  }}
                >
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
                        <h2 className="profile-company">{user.company.name}</h2>
                        <div>
                          <div className="address">
                            <BsGeoAltFill />
                            <span>{user.address.street}, </span>
                            <span>{user.address.city}</span>
                          </div>
                          <div className="social-links">
                            <Link to="#" className="facebook">
                              <BsFacebook />
                              <div className="social-username">{user.name}</div>
                            </Link>
                            <Link to="#" className="twitter">
                              <BsTwitter />
                              <div className="social-username">
                                @{user.username}
                              </div>
                            </Link>
                            <Link to="#" className="linkedin">
                              <BsLinkedin />
                              <div className="social-username">{user.name}</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
              </section>
              <section className="profile-posts">
                <div className="section-wrapper profile-section">
                  <Sidebar user={user} />
                  <Main user={user} />
                </div>
              </section>
            </>
          )}
        </main>
      )}
    </>
  );
};

export default Profile;
