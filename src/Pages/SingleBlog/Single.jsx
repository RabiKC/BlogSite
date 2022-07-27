import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Blog from "./Blog";
import Sidebar from "./Sidebar/Sidebar";
import CommentSection from "./Comment/CommentSection";
import "./single.css";

const Single = () => {
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  const { id, userId } = useParams();
  const [loading, setLoading] = useState(false);

  const postId = parseInt(id);

  const blogUrl = `http://localhost:8000/posts/${id}`;
  const userUrl = `http://localhost:8000/users/${userId}`;

  const blogs = () => {
    setLoading(true);
    try {
      fetch(blogUrl)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
          console.log(data);
        });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const userDetail = async () => {
    setLoading(true);
    try {
      const data = await axios.get(userUrl);

      setUser(data.data);
      console.log(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    blogs();
    userDetail();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loading-section">Loading...</div>
      ) : user && blog ? (
        <main className="single-blog-page">
          <Blog user={user} blog={blog} setLoading={setLoading} />
          <Sidebar user={user} setLoading={setLoading} />
          <CommentSection postId={postId} setLoading={setLoading} />
        </main>
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
};

export default Single;
