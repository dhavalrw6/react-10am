import React, { useRef } from "react";

function UnControll() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <h2>Form Uncontroll</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          ref={usernameRef}
          placeholder="Enter your username"
        />
        <input
          type="text"
          name="email"
          ref={emailRef}
          placeholder="Enter your username"
        />
        <input
          type="text"
          name="password"
          ref={passwordRef}
          placeholder="Enter your username"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControll;
