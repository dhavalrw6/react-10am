import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);

  let handleClick = () => {
    alert("Button clicked");
  };

  const handelChange = (e) => {
    setName(e.target.value);
  };

  const handleOver = () => {
    // setColor({ color: "red" });
    setActive(true);
  };

  const handleLeave = () => {
    setColor({});
  };

  return (
    <>
      <form action="">
        <input type="text" name="name" onKeyDown={(e) => handelChange(e)} />{" "}
        <br />
        <label htmlFor="">{name}</label>
      </form>

      <p onMouseOver={handleOver} className={active ? "active" : ""}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        dignissimos necessitatibus repellat quod ex, doloremque cupiditate ut
        sunt. Ut autem quibusdam et nihil sequi, accusantium facilis aliquam
        placeat quisquam alias.
      </p>

      <button onClick={() => handleClick()}>click me</button>
      <button onClick={() => alert("Hello...")}>click 2</button>
    </>
  );
}

export default App;
