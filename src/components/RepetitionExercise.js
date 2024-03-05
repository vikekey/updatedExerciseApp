import React, { useState } from "react";

function RepetitionExercise({ exercise, setMenuScreen }) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "3em" }}>{count}</p>
      <button
        style={{ fontSize: "1em" }}
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
      <button style={{ fontSize: "1em" }} onClick={() => setCount(0)}>
        Reset
      </button>
      <br />
      <button style={{ fontSize: "1.25em" }} onClick={setMenuScreen}>
        Return to Menu
      </button>
    </div>
  );
}

export default RepetitionExercise;
