import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/variables";
import axios from "axios";
import { FaRegComment } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";

const userUrl = "http://localhost:8000/users";
const ContentCard = ({ content }) => {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState(null);

  const [userComment, setUserComment] = useState("");

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

  const getComments = async () => {
    const data = await axios.get(baseUrl + "./comments");

    setComments(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    users();
    getComments();
  }, []);

  const postUser = user && user.find(({ id }) => id === content.userId);
  const userLink = postUser && `users/${postUser.id}/${postUser.username}`;

  const postLink = `blogs/${content.id}/${content.userId}`;

  const postComment =
    comments && comments.filter(({ postId }) => content.id === postId);
  console.log(postComment);

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
                  src={`https://picsum.photos/480/270?random=${content.id}`}
                  alt={content.title}
                />
              </div>
            </div>
            <div className="title-groups">
              <Link to={"#"}>reactjs</Link>
              <Link to={"#"}>javascript</Link>
              <Link to={"#"}>web development</Link>
              <Link to={"#"}>front-end</Link>
            </div>
            <div className="end-part">
              {postComment && (
                <div className="comments">
                  <FaRegComment />

                  <span>{postComment.length} comments</span>
                </div>
              )}
              <BsBookmarkPlus className="bookmark" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
