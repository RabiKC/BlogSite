import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import RecentBlogs from "./RecentBlogs";
import PopularBlogs from "./PopularBlogs";
import PopularBloggers from "./PopularBloggers";

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
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.4)), url(${heroImg})`,
            }}
          >
            <div className="section-wrapper hero-wrapper">
              <div className="hero-left">
                <h1 className="hero-title">Post Your Blogs Here</h1>
                <Link to="/blogs">Explore</Link>
              </div>
              <div className="hero-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat quis asperiores libero minus repellendus esse odit ex
                quae distinctio possimus animi sint ratione sunt cupiditate iste
                ut aliquid nostrum incidunt laborum, repudiandae corrupti
                commodi reiciendis voluptatum. Sapiente mollitia perferendis
                neque ab dicta quibusdam, maxime rem dolorum beatae doloribus.
                Necessitatibus cumque repellendus libero iusto eveniet et
                nesciunt nobis, molestias laborum unde illum nulla a, distinctio
                atque recusandae. Explicabo, aperiam sapiente aut dolorum, odit
                debitis repellat, veritatis modi doloribus blanditiis magnam
                molestias!
              </div>
            </div>
          </section>
          <RecentBlogs />
          <PopularBlogs />
          <PopularBloggers />
        </main>
      )}
    </>
  );
};

export default Home;
