import React from "react";
import { Link } from "react-router-dom";

import MoreContent from "./MoreContent";

const Sidebar = ({ user }) => {
  const userLink = `/users/${user.id}/${user.username}`;

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
      {user && (
        <div className="sidebar-user-detail">
          <Link to={userLink}>
            <img src={user.profileImg} alt="" />
          </Link>
          <p>{user.name}</p>
          <span>303 Followers</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            qui molestiae cupiditate esse. Ad qui nisi ut blanditiis totam cum.
          </p>
          <a href="#">{user.website}</a>
        </div>
      )}

      <MoreContent />
    </aside>
  );
};

export default Sidebar;
