import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = ({ user, setLoading }) => {
  const postUrl = "http://localhost:8000/posts";
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    setLoading(true);
    try {
      fetch(postUrl)
        .then((res) => res.json())
        .then((data) => setPosts(data));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const userPosts =
    posts && posts.filter((p) => p.userId === user.id).reverse();

  console.log(posts && posts.map((p) => p.userId));
  console.log(userPosts && userPosts);

  return (
    <div className="main-profile-section">
      <div className="user-posts">
        <h1 className="title">Posts by {user.name}</h1>
        <div className="cards-container">
          {userPosts &&
            userPosts.map((u, i) => (
              <div className="card">
                <Link to={`/blogs/${u.id}/${user.id}`}>
                  <h2>{u.title}</h2>
                  <p>{u.body}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
