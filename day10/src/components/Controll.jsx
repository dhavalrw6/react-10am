import React, { useRef, useState } from "react";

function Controll() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
    // console.log(user);

    // console.log(name + " " + value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({});
  };

  return (
    <div>
      <h2>Form Controll</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username || ""}
          onChange={handleChange}
          placeholder="Enter your username"
        />
        <br />
        <input
          type="text"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br />
        <input
          type="text"
          name="password"
          value={user.password || ""}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Controll;
