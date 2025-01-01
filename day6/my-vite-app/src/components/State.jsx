import React from "react";
import City from "./City";

function State({city}) {
  return (
    <>
      <h2>Hello from State</h2>
      <City city={city} />
    </>
  );
}

export default State;
