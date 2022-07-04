import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = ({ user, setLoading }) => {
  const postUrl = "http://localhost:8000/posts";
  const imgsUrl = "http://localhost:8000/images";
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

  // const getImgs = () => {
  //   try {
  //     const response = async () => {
  //       setLoading(true);
  //       await fetch(imgsUrl)
  //         .then((res) => res.json())
  //         .then((data) => setImages(data));

  //       setLoading(false);
  //     };
  //   } catch (error) {
  //     setLoading(true);
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    getPosts();
  }, []);

  const userPosts =
    posts && posts.filter((p) => p.userId === user.id).reverse();

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
                <Link to={`/blogs/${u.id}/${user.id}`}>
                  <img
                    src={`https://picsum.photos/535/300?random=${u.id}`}
                    alt={user.name}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
