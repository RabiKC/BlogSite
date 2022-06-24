import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const UserDetail = ({ user }) => {
  return (
    <div className="user-section">
      <div className="user-details">
        <div className="user-image"></div>
        <div className="user-detail">
          <span className="user-name">{user.name}</span>
          <span>June 3, 2022</span>
        </div>
      </div>
      <ul className="user-social-links">
        <li className="link">
          <Link to="#">
            <BsTwitter />
          </Link>
        </li>
        <li className="link">
          <Link to="#">
            <BsFacebook />
          </Link>
        </li>
        <li className="link">
          <Link to="#">
            <BsLinkedin />
          </Link>
        </li>
        <li className="link">
          <Link to="#">
            <BsGithub />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDetail;
