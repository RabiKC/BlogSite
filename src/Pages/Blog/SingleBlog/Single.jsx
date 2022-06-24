import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Blog from "./Blog";
import Sidebar from "./Sidebar";
import CommentSection from "./CommentSection";
import "./single.css";

const Single = () => {
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  const { id, userId } = useParams();
  const [loading, setLoading] = useState(false);

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
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : user && blog ? (
        <main className="single-blog-page">
          <Blog user={user} blog={blog} />
          <Sidebar user={user} />
          <CommentSection postId={id} />
        </main>
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
};

export default Single;
