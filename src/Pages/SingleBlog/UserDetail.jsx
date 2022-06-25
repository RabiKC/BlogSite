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
