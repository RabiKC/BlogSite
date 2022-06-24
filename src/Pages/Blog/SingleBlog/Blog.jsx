import React from "react";

const Blog = ({ user, blog }) => {
  return (
    <section className="blog-section">
      <div className="user-section">
        <div className="user-image"></div>
        <span className="user-name">{user.name}</span>
      </div>
    </section>
  );
};

export default Blog;
