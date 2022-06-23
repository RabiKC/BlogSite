import axios from "axios";
import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";

const postUrl = "http://localhost:8000/posts";
const userUrl = "http://localhost:8000/users";

const RecentBlogs = () => {
  const [recent, setRecent] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const recentBlogs = async () => {
    try {
      setLoading(true);
      const data = await axios.get(postUrl);

      setRecent(data.data);
      console.log(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  const users = () => {
    try {
      fetch(userUrl)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const singlePost =
  //   recent &&
  //   recent.slice(recent.length - 4, recent.length).map(({ userId }) => userId);

  // const findUser = user && user.find(({ id }) => id === singlePost.map);
  // console.log(findUser);

  useEffect(() => {
    recentBlogs();
    users();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <section className="popular-blogs section">
          <div className="section-wrapper">
            <h1 className="section-title">Recent Posts</h1>
            <div className="recent-grid-section">
              {recent ? (
                recent
                  .slice(recent.length - 4, recent.length)
                  .map((r, i) => <ContentCard content={r} key={i} />)
              ) : (
                <h2 className="no-post">No Recent Posts</h2>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RecentBlogs;
