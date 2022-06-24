import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const userUrl = "http://localhost:8000/users";

const ContentCard = ({ content }) => {
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    users();
  }, []);

  const postUser = user && user.find(({ id }) => id === content.userId);
  const userLink = postUser && `users/${postUser.id}/${postUser.username}`;
  const postLink = `blogs/${content.id}/${content.userId}`;

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
