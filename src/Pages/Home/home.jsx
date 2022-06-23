import React, { useEffect, useState } from "react";
import "./home.css";
import RecentBlogs from "./RecentBlogs";
import PopularBlogs from "./PopularBlogs";

const usersUrl = "http://localhost:8000/users";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <main className="home-page">
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.8)), url(./hero.jpg)`,
        }}
      >
        <h1 className="hero-title">Post Your Blogs Here</h1>
        {/* <div className="users">
          {users.map((u, i) => (
            <span key={i}>{u.name}</span>
          ))}
        </div> */}
      </section>
      <RecentBlogs />
      <PopularBlogs />
    </main>
  );
};

export default Home;
