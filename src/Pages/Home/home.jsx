import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import RecentBlogs from "./RecentBlogs";
import PopularBlogs from "./PopularBlogs";

// https://i.picsum.photos/id/681/3840/2160.jpg?hmac=ZerVaxp0QVykVeeMjE7nvOB5q7p2cEBAfxZZYjXqlXs

const Home = () => {
  const heroImg =
    "https://i.picsum.photos/id/475/1980/1080.jpg?hmac=frSzH7BplvWgovEYY6ZlAlk4mwRCo_0pcCTLpgLhw0Q";

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="loading-section">Loading...</div>
      ) : (
        <main className="home-page">
          <section
            className="hero-section"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.4)), url(${heroImg})`,
            }}
          >
            <h1 className="hero-title">Post Your Blogs Here</h1>
            <Link to="/blogs">Explore</Link>
          </section>
          <RecentBlogs />
          <PopularBlogs />
        </main>
      )}
    </>
  );
};

export default Home;
