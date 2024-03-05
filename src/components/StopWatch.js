import React, { useCallback, useEffect, useState } from "react";

function StopWatch({ exercise, setMenuScreen }) {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  const toggleRunning = useCallback(() => {
    setRunning(!running);
  }, [running]);

  const resetTimerAndLaps = useCallback(() => {
    setTimer(0);
    setRunning(false);
  }, []);

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
      {/* <p>{exercise.name}</p> */}
      <div>{formatTime(timer)}</div>
      <button style={{ fontSize: "1em" }} onClick={toggleRunning}>
        {running ? "Pause" : "Start"}
      </button>
      <button style={{ fontSize: "1em" }} onClick={resetTimerAndLaps}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
