import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PopularBloggers = ({ setLoading }) => {
  const usersUrl = "http://localhost:8000/users";

  const [users, setUsers] = useState(null);

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

  const randomUser = users && users.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <section className="popular-bloggers section">
      <div className="section-wrapper">
        <h1 className="section-title">Some Popular Bloggers</h1>
        <div className="bloggers-grid">
          {randomUser &&
            randomUser.map((r, i) => (
              <div className="bloggers-card" key={i}>
                <div className="backdrop-container">
                  <img src={r.profileCardImg} alt={r.name} />
                </div>
                <div className="bloggers-card-content">
                  <img src={r.profileImg} alt={r.name} />
                  <Link
                    to={`/users/${r.id}/${r.username}`}
                    className="profile-link"
                  >
                    <h2> {r.name}</h2>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                    distinctio molestias perspiciatis?
                  </p>
                  <div className="links">
                    <Link to={`/users/${r.id}/${r.username}`}>Follow</Link>
                    <Link to={`/users/${r.id}/${r.username}`}>More Info</Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBloggers;
