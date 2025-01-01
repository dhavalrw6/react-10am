import React from "react";
import { useState } from "react";
function Theme() {
  const [light, setLight] = useState(false);

  let handleTheme = (type) => {
    if (type == "light") {
      setLight(true);
    } else {
      setLight(false);
    }
  };
  return (
    <>
      {/* <h2 style={light ? { background: "#D9DFC6" } : { background: "#7E99A3" }}>
        Hello world!
      </h2> */}

      {light ? "☀️" : "🌑"}

      {light ? (
        <button onClick={() => handleTheme("dark")}>dark</button>
      ) : (
        <button onClick={() => handleTheme("light")}>light</button>
      )}
    </>
  );
}

export default Theme;
