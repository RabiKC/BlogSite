import React, { useState, useEffect } from "react";

const postUrl = "http://localhost:8000/posts";
const userUrl = "http://localhost:8000/users";

const PopularBlogs = () => {
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(false);

  const popularBlogs = () => {
    try {
      setLoading(true);
      fetch(postUrl)
        .then((res) => res.json())
        .then((data) => setPopular(data));

      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    popularBlogs();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <section className="recent-blogs section">
          <div className="section-wrapper">
            <h1 className="section-title">Popular Posts</h1>
            <div className="popular-grid-section">
              {popular ? (
                popular.map((p, i) => <span key={i}>{p.id}</span>)
              ) : (
                <h2 className="no-post">No Popular Posts</h2>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PopularBlogs;
