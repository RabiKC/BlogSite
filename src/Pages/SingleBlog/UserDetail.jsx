import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const UserDetail = ({ user }) => {
  const userLink = `/users/${user.id}/${user.username}`;
  return (
    <div className="user-section">
      <div className="user-details">
        <Link to={userLink} className="user-image">
          <img src={user.profileImg} alt="" />
        </Link>
        <div className="user-detail">
          <div className="user-dropdown">
            <Link to={userLink} className="user-name">
              {user.name}
            </Link>
            <div className="user-dropdown-items">
              <div className="top-half">
                <Link to={userLink} className="user-image">
                  <img src={user.profileImg} alt="" />
                </Link>
                <Link to={userLink} className="user-name">
                  {user.name}
                </Link>
              </div>
              <div className="bottom-half">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem ex eum provident, vero unde sapiente itaque veritatis?
                  Ipsam, recusandae harum?
                </p>
                <Link to="#">{user.website}</Link>
              </div>
            </div>
          </div>
          <span>June 3, 2022</span>
        </div>
      </div>
      <ul className="user-social-links">
        <li className="link">
          <a href="https://twitter.com/" rel="noreferrer" target="_blank">
            <BsTwitter />
          </a>
        </li>
        <li className="link">
          <a href="https://facebook.com/" rel="noreferrer" target="_blank">
            <BsFacebook />
          </a>
        </li>
        <li className="link">
          <a href="https://linkedin.com/" rel="noreferrer" target="_blank">
            <BsLinkedin />
          </a>
        </li>
        <li className="link">
          <a href="https://github.com/" rel="noreferrer" target="_blank">
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserDetail;
