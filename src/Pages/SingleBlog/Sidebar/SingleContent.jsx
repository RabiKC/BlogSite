import React from "react";
import { Link } from "react-router-dom";

const SingleContent = ({ content }) => {
  return (
    <div className="sidebar-single-content">
      <Link to={`/blogs/${content.id}/${content.userId}`}>
        <h2>{content.title}</h2>
      </Link>
      <img
        src={`https://picsum.photos/355/200?random=${content.id}`}
        alt={content.title}
      />
      <p>{content.body}</p>
    </div>
  );
};

export default SingleContent;
