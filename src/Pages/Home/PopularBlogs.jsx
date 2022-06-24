import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";

const postUrl = "http://localhost:8000/posts";

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

  const shuffled =
    popular && popular.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <section className="recent-blogs section">
          <div className="section-wrapper">
            <h1 className="section-title">Popular Posts</h1>
            <div className="popular-grid-section">
              {shuffled ? (
                shuffled.map((p, i) => <ContentCard key={i} content={p} />)
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
