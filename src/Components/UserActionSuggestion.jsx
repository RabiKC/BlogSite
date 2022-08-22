import React from "react";
import SignIpBtn from "./SignInBtn";
import SignUpBtn from "./SignUpBtn";

const UserActionSuggestion = () => {
  return (
    <div className="user-action-suggestion">
      <h1>DEV Community is a community of 895,291 amazing developers</h1>
      <p>
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </p>
      <SignUpBtn content="Create account" />
      <SignIpBtn content="Sign In" />
    </div>
  );
};

export default UserActionSuggestion;
