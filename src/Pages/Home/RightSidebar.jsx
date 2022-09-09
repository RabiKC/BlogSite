import React from "react";
import { Link } from "react-router-dom";

const discover = [
  {
    id: 1,
    name: "Self",
    link: "#",
  },
];

const RightSidebar = () => {
  return (
    <aside className="home-right-sidebar">
      <div className="sidebar-wrapper">
        <div className="discover-links-section">
          <h1> Discover more on the topics you want to discover</h1>
          <ul className="discover-links">
            <li>
              <Link to="#">Self</Link>
            </li>
            <li>
              <Link to="#">Relationships</Link>
            </li>
            <li>
              <Link to="#">Data Science</Link>
            </li>
            <li>
              <Link to="#">Programming</Link>
            </li>
            <li>
              <Link to="#">Productivity</Link>
            </li>
            <li>
              <Link to="#">Javascript</Link>
            </li>
            <li>
              <Link to="#">Machine Learning</Link>
            </li>
            <li>
              <Link to="#">Politics</Link>
            </li>
            <li>
              <Link to="#">Health</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <ul className="links">
            <li>
              <Link to="#">Help</Link>
            </li>
            <li>
              <Link to="#">Status</Link>
            </li>
            <li>
              <Link to="#">Writers</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Terms</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
