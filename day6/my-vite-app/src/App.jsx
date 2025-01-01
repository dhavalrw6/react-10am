import React, { useState } from "react";
import State from "./components/State";

function App() {

  const [city,setCity] = useState('Surat');

  return (
    <>
       
      <State city={city} />
    </>
  );
}

export default App;
