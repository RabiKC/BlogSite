import React from "react";
import { Link } from "react-router-dom";

const ContentCard = ({ content, user }) => {
  const postUser = user && user.find(({ id }) => id === content.userId);
  const userLink = postUser && `${postUser.id}/${postUser.username}`;
  const postLink = `blogs/${content.id}/${content.userId}`;
  console.log(postUser);

  return (
    <div className="post-card">
      <div className="post-content-flex">
        <Link to={postLink}>
          <h3>{content.title}</h3>
        </Link>
        <div className="btm-part">
          {postUser && (
            <>
              <Link to={userLink} className="user-info">
                <div className="user-pic"></div>
                <span className="user-name">{postUser && postUser.name}</span>
              </Link>
            </>
          )}

          <p className="posts-desc">{content.body.substring(0, 101)}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
