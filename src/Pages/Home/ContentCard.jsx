import React from "react";
import { Link } from "react-router-dom";

const ContentCard = ({ content }) => {
  return (
    <div className="post-card">
      <div className="post-content-flex">
        <h3>{content.title}</h3>
        <div className="btm-part">
          <div className="user-info">
            <div className="user-pic"></div>
            <Link to="#">
              <span className="user-name">John Doe</span>
            </Link>
          </div>
          <p className="posts-desc">{content.body.substring(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
