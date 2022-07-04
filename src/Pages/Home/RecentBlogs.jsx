import axios from "axios";
import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";

const postUrl = "http://localhost:8000/posts";

const RecentBlogs = ({ setLoading }) => {
  const [recent, setRecent] = useState(null);

  const recentBlogs = async () => {
    setLoading(true);

    try {
      const data = await axios.get(postUrl);

      setRecent(data.data);
      console.log(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    recentBlogs();
  }, []);

  const shuffled = recent && recent.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <section className="popular-blogs section">
      <div className="section-wrapper">
        <h1 className="section-title">Recent Posts</h1>
        <div className="recent-grid-section">
          {shuffled ? (
            shuffled.map((r, i) => <ContentCard content={r} key={i} />)
          ) : (
            <h2 className="no-post">No Recent Posts</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
