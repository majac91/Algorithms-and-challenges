import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [running, setRunning] = useState(false);

  let updatedH = time.h,
    updatedM = time.m,
    updatedS = time.s,
    updatedMs = time.ms;

  function start() {
    if (time.ms < 100) {
      time.ms++;
    } else if (time.ms === 100) {
      updatedS++;
      time.ms = 0;
    }
    if (time.s === 60) {
      updatedM++;
      time.s = 0;
    }
    if (time.m === 60) {
      updatedH++;
      time.m = 0;
    }
    return setTime({ h: updatedH, m: updatedM, s: updatedS, ms: updatedMs });
  }

  function run() {
    setInterval(() => start(), 100);
  }

  useEffect(() => {
    let id = setInterval(() => run(), 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <>
      <h2>
        {time.h} : {time.m} :{time.s} :{time.ms}
      </h2>
      <button onClick={() => setRunning(!running)}>Start/Pause</button>
      <button>Stop</button>
    </>
  );
}
