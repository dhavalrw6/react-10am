import React, { useRef, useState } from "react";
import Theme from "./components/Theme";

function App() {
  const users = ["Raj", "Ram", "Raju", "Karan"];

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
  };

  return (
    <>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>

      <form action="" method="post" onSubmit={handleSubmit}>
        <input type="text" name="username" ref={name} />
        <input type="text" name="email" ref={email} />
        <input type="text" name="password" ref={password} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
