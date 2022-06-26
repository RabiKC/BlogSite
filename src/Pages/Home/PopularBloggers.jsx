import React, { useState, useEffect } from "react";

const PopularBloggers = () => {
  const usersUrl = "http://localhost:8000/users";

  const [users, setUsers] = useState(null);

  const getUsers = () => {
    try {
      fetch(usersUrl)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    } catch (error) {
      console.log(error);
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
                <img src={r.profileImg} alt={r.name} />
                <h2> {r.name}</h2>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBloggers;
