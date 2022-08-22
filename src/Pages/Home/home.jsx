import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import LeftSidebar from "./LeftSidebar";
import RecentBlogs from "./RecentBlogs";
import RightSidebar from "./RightSidebar";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="loading-section">Loading...</div>
      ) : (
        <main className="home-page page">
          <LeftSidebar />
          <RecentBlogs setLoading={setLoading} />
          <RightSidebar />
        </main>
      )}
    </>
  );
};

export default Home;
