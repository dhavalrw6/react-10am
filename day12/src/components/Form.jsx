import React, { useState } from "react";
import View from "./View";

function Form() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, user]);
    setUser({});
  };

  console.log(list);

  return (
    <>
      <form className="w-50 mx-auto" method="post" onSubmit={handleSubmit}>
        <h2 className="mt-3">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername1"
            name="username"
            value={user.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={user.password || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <View list={list} />
    </>
  );
}

export default Form;
