import React from "react";
import { Link } from "react-router-dom";

const SingleComment = ({ comment }) => {
  return (
    <div className="single-comment">
      <div className="user-detail">
        <Link to="#">
          <div className="user-pic"></div>
          <div className="username">{comment.email}</div>
        </Link>
      </div>
      <p className="user-comment">{comment.body}</p>
    </div>
  );
};

export default SingleComment;
