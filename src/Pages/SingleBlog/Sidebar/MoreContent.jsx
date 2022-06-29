import React, { useState, useEffect } from "react";
import SingleContent from "./SingleContent";

const MoreContent = ({ setLoading }) => {
  const postUrl = `http://localhost:8000/posts`;
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    setLoading(true);
    fetch(postUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const randomPost = posts && posts.sort(() => 0.5 - Math.random()).slice(0, 4);
  console.log(randomPost);
  return (
    <div className="sidebar-blogs-content">
      <h1>More Blogs</h1>
      <div className="contents">
        {randomPost &&
          randomPost.map((p, i) => <SingleContent key={i} content={p} />)}
      </div>
    </div>
  );
};

export default MoreContent;
