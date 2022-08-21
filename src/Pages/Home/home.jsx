import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="loading-section">Loading...</div>
      ) : (
        <main className="home-page page">
          {/* <section
            className="hero-section"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.4)), url(${heroImg})`,
            }}
          >
            <div className="section-wrapper hero-wrapper">
              <div className="hero-content">
                <h1 className="hero-title">Post Your Blogs Here</h1>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt eveniet animi error veniam facilis culpa? Quia.
                </h2>
                <Link to="/blogs">Explore</Link>
              </div>
              <div className="hero-right"></div>
            </div>
          </section> */}
          {/* <PopularBlogs setLoading={setLoading} /> */}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            neque aut suscipit perferendis nam dolores, repudiandae tempora
            architecto at, alias nostrum beatae aperiam! Et quaerat minima
            ducimus nesciunt repellat ab ratione omnis, consectetur dicta nulla
            commodi reprehenderit ut ullam aliquid minus accusamus est mollitia
            hic rerum aperiam aspernatur quia ad corporis nemo. Corrupti
            recusandae voluptates blanditiis non officiis natus libero vel
            quibusdam asperiores necessitatibus officia eum doloremque vitae,
            nam magnam cumque reiciendis assumenda. Officiis vel repellendus
            molestiae dolores esse voluptatibus similique quia alias. Similique
            aspernatur magnam eius error, harum culpa sed fugiat beatae possimus
            obcaecati. Cumque voluptas et voluptatem vero.
          </div>
          <RecentBlogs setLoading={setLoading} />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            neque aut suscipit perferendis nam dolores, repudiandae tempora
            architecto at, alias nostrum beatae aperiam! Et quaerat minima
            ducimus nesciunt repellat ab ratione omnis, consectetur dicta nulla
            commodi reprehenderit ut ullam aliquid minus accusamus est mollitia
            hic rerum aperiam aspernatur quia ad corporis nemo. Corrupti
            recusandae voluptates blanditiis non officiis natus libero vel
            quibusdam asperiores necessitatibus officia eum doloremque vitae,
            nam magnam cumque reiciendis assumenda. Officiis vel repellendus
            molestiae dolores esse voluptatibus similique quia alias. Similique
            aspernatur magnam eius error, harum culpa sed fugiat beatae possimus
            obcaecati. Cumque voluptas et voluptatem vero.
          </div>

          {/* <PopularBloggers setLoading={setLoading} /> */}
        </main>
      )}
    </>
  );
};

export default Home;
