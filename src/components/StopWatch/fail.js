import React, { useEffect, useState, useCallback } from "react";

export default function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [curTime, setCurTime] = useState(() => Date.now()); // Initialize with a function
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); // Change the initial state to false

  useEffect(() => {
    if (running) {
      let newTimer = setInterval(
        () => setCurTime((prev) => prev + 1),
        1000 / 30
      );
      setTimer(newTimer);
      return () => clearInterval(newTimer);
    }
  }, [running]);

  const click = useCallback(() => {
    if (running) {
      clearInterval(timer);
      setTime((prev) => Date.now() - curTime + prev); // Add the elapsed time to the total time
      setRunning(false);
    } else {
      setRunning(true);
      clearInterval(timer); // Clear any existing timer
      setCurTime(Date.now());
      let newTimer = setInterval(
        () => setCurTime((prev) => prev + 1),
        1000 / 30
      );
      setTimer(newTimer);
    }
  }, [running, timer, curTime]);

  return (
    <div>
      <p>
        {running
          ? ((Date.now() - curTime) / 1000).toFixed(2)
          : (time / 1000).toFixed(2)}
      </p>
      <button onClick={click}>{running ? "Stop" : "Start"}</button>
    </div>
  );
}
