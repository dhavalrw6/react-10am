import React, { useRef } from "react";

function App() {
  let heading = useRef();

  let handleConsole = () => {
    console.log(heading);
  };

  return (
    <div>
      <h2 ref={heading}>Hello user.</h2>
      <button onClick={handleConsole}>click</button>
    </div>
  );
}

export default App;
