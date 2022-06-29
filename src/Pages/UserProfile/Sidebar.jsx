import React from "react";
import { BsEnvelopeFill, BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = ({ user }) => {
  return (
    <aside className="profile-sidebar">
      <div className="wrapper">
        <div className="profile-sidebar-links">
          <Link to="#">
            <BsEnvelopeFill />
            <span> {user.email}</span>
          </Link>
          <Link to="#">
            <BsLink />
            <span> {user.website}</span>
          </Link>
        </div>
        <div className="follow-section">
          <button>Follow</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
