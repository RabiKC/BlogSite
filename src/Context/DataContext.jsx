import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const DataContext = createContext("");

export const DataProvider = (props) => {
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);

  const postUrl = "http://localhost:8000/posts";
  const usersUrl = "http://localhost:8000/users";
  const commentsUrl = "http://localhost:8000/comments";
  const imagesUrl = "http://localhost:8000/images";

  const getUsers = () => {
    setLoading(true);
    try {
      fetch(usersUrl)
        .then((res) => res.json())
        .then((data) => setUsers(data));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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

  const getComments = async () => {
    setLoading(true);
    const data = await axios.get(commentsUrl);
    setComments(data.data);
    console.log(data.data);
    setLoading(false);
  };

  const getImages = async () => {
    setLoading(true);
    try {
      await axios.get(imagesUrl).then((res) => setImages(res.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
    getPosts();
    getComments();
    getImages();
  }, []);

  const value = {
    users,
    getUsers,
    posts,
    getPosts,
    comments,
    getComments,
    images,
    getImages,
    loading,
    setLoading,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
