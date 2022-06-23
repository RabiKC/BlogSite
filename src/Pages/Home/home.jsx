import React, { useEffect, useState } from "react";
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
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.8)), url(./hero.jpg)`,
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
