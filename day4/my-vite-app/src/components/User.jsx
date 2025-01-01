import React from "react";
import "./User.css";

function User({username}) {
  return (
    <>
      <h2 className="text">Hello , {username} </h2>
    </>
  );
}

export default User;
