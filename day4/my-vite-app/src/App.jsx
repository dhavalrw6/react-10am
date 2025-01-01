import React from "react";
import User from "./components/User";
function App() {
  const username = "Pratham"
  return (
    <>
      <User username={username} />
      <p>
        Lorem ipsum <strong>dolor sit amet</strong> consectetur adipisicing
        elit. Porro pariatur assumenda modi eum dolorem soluta consequuntur
        mollitia quam omnis dicta deleniti voluptas delectus ut quia, nihil
        reiciendis voluptatem tenetur aliquid.
      </p>
    </>
  );
}

export default App;
