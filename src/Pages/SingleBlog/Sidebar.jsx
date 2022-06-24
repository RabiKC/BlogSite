import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="single-blog-sidebar">
      <div className="get-started">
        <Link to="#" className="get-started-link">
          Get Started
        </Link>
        <Link to="#" className="sign-in-link">
          Sign in
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
