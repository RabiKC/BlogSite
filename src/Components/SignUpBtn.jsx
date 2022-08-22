import React from "react";
import { Link } from "react-router-dom";

const SignUpBtn = ({ content }) => {
  return (
    <div className="btn-container">
      <Link to="/sign-up" className="sign-up-btn">
        {content}
      </Link>
    </div>
  );
};

export default SignUpBtn;
