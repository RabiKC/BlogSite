import React from "react";
import { Link } from "react-router-dom";

const SignIpBtn = ({ content }) => {
  return (
    <div className="btn-container">
      <Link to="/sign-in" className="sign-in-btn">
        {content}
      </Link>
    </div>
  );
};

export default SignIpBtn;
