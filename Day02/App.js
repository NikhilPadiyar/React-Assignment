import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1> THIS IS MY COUNTER APP </h1>
      <h2>{score}</h2>
      <button
        onClick={() => {
          score < 25 ? setScore(score + 1) : alert("UPPER LIMIT IS 25");
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          score > 0 ? setScore(score - 1) : alert("LOWER LIMIT IS 0");
        }}
      >
        DECREMENT
      </button>
      <button
        onClick={() => {
          setScore(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default App;
