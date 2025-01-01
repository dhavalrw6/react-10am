import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem("count")) || 0;
    setCount(oldCount);
  }, []);

  const handleIncrement = () => {
    let newCount = count + 1; // ?
    setCount(newCount);
    localStorage.setItem("count", newCount);
  };

  const handledecrement = () => {
    let newCount = count - 1; // ?
    setCount(newCount);
    localStorage.setItem("count", newCount);
  };

  return (
    <>
      <h1>Vite + React + count {count}</h1>

      <div className="card">
        <button onClick={handledecrement}>-</button>
        {count}
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
}

export default App;
