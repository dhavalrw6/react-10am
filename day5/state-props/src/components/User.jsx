import React from "react";

function User({ user, updateHeandler }) {
  const { username, age, email } = user;

  return (
    <>
      <div className="card">
        <h2>User name: {username}</h2>
        <p>
          age: {age} email: {email}
        </p>
      </div>
      <button onClick={updateHeandler}>Update</button>
    </>
  );
}

export default User;
