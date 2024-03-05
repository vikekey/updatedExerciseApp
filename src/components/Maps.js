import React, { useState } from "react";

function MapsExercise({ exercise, setMenuScreen }) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "5em" }}>{count}</p>
      <button
        style={{ fontSize: "2em" }}
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
      <button style={{ fontSize: "2em" }} onClick={() => setCount(0)}>
        Reset
      </button>
      <br />
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>
        Return to Menu
      </button>
    </div>
  );
}

export default MapsExercise;
