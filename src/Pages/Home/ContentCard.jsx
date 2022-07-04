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
          <h2>{content.title}</h2>
        </Link>
        <div className="btm-part">
          {postUser && (
            <>
              {/* <div> */}
              <img
                src={`https://picsum.photos/535/300?random=${content.id}`}
                alt={content.title}
              />
              <Link to={userLink} className="user-info">
                <div className="user-pic">
                  <img src={postUser.profileImg} alt={postUser.name} />
                </div>
                <span className="user-name">{postUser.name}</span>
              </Link>
              {/* </div> */}
            </>
          )}

          <p className="posts-desc">{content.body.substring(0, 101)}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
