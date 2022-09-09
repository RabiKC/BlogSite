import axios from "axios";
import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";

const postUrl = "http://localhost:8000/posts";

const RecentBlogs = ({ setLoading }) => {
  const [recent, setRecent] = useState(null);

  const recentBlogs = async () => {
    try {
      setLoading(true);
      fetch(postUrl)
        .then((res) => res.json())
        .then((data) => setRecent(data));
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    recentBlogs();
  }, []);

  const shuffled =
    recent && recent.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <section className="blogs-category recent-blogs section">
      {/* <h1 className="section-title">Recent Posts</h1> */}
      <div className="recent-flex-section">
        {shuffled ? (
          shuffled.map((r, i) => <ContentCard content={r} key={i} />)
        ) : (
          <h2 className="no-post">No Recent Posts</h2>
        )}
      </div>
    </section>
  );
};

export default RecentBlogs;
