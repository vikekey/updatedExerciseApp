import React, { useCallback, useEffect, useState } from "react";

function RunningExercise({ exercise, setMenuScreen }) {
  const [laps, setLaps] = useState([]);
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  const toggleRunning = useCallback(() => {
    setRunning(!running);
  }, [running]);

  const resetTimerAndLaps = useCallback(() => {
    setTimer(0);
    setLaps([]);
    setRunning(false);
  }, []);

  const recordLap = useCallback(() => {
    setLaps([...laps, timer]);
  }, [laps, timer]);

  useEffect(() => {
    if (running) {
      const intervalid = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);

      return () => clearInterval(intervalid);
    }
  }, [running]);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const mills = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}:${mills}`;
  };

  return (
    <div>
      <p style={{ fontSize: "1em" }}>{exercise.name}</p>
      <div>{formatTime(timer)}</div>
      <button style={{ fontSize: "1em" }} onClick={toggleRunning}>
        {running ? "Pause" : "Start"}
      </button>
      <button style={{ fontSize: "1em" }} onClick={resetTimerAndLaps}>
        Reset
      </button>
      <button style={{ fontSize: "1em" }} onClick={recordLap}>
        Record Lap
      </button>
      <br />
      <button style={{ fontSize: "1.25em" }} onClick={setMenuScreen}>
        Back to Menu
      </button>
      <div>
        <h3>Laps:</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;
