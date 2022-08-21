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
    <div className="content-card">
      <div className="content-card-wrapper">
        {postUser && (
          <>
            <div className="user-info-wrapper">
              <Link to={userLink} className="user-info">
                <div className="user-pic">
                  <img src={postUser.profileImg} alt={postUser.name} />
                </div>
                <span className="user-name">{postUser.name}</span>
              </Link>
            </div>
            <div className="card-content-wrapper">
              <div className="content">
                <Link to={postLink}>
                  <h2>{content.title}</h2>
                </Link>
              </div>
              <div className="img">
                <img
                  src={`https://picsum.photos/535/300?random=${content.id}`}
                  alt={content.title}
                />
              </div>
            </div>
            <div className="title-groups">
              <Link to={"#"}>#reactjs</Link>
              <Link to={"#"}>#javascript</Link>
              <Link to={"#"}>#web development</Link>
              <Link to={"#"}>#front-end</Link>
            </div>

            {/* <div className="btm-part">
            {postUser && (
                <img
                  src={`https://picsum.photos/535/300?random=${content.id}`}
                  alt={content.title}
                />
            )}
            <p className="posts-desc">{content.body.substring(0, 90)}...</p>
          </div>
          <Link to={postLink} className="read-more-link">
            Read more
          </Link> */}
          </>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
