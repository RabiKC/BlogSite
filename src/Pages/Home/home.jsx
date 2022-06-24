import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import RecentBlogs from "./RecentBlogs";
import PopularBlogs from "./PopularBlogs";

const Home = () => {
  return (
    <main className="home-page">
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.85)), url(./hero.jpg)`,
        }}
      >
        <h1 className="hero-title">Post Your Blogs Here</h1>
        <Link to="/blogs">Explore</Link>
      </section>
      <RecentBlogs />
      <PopularBlogs />
    </main>
  );
};

export default Home;
