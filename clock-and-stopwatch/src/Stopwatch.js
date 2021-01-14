import React, { useState, useEffect } from "../node_modules/react";

export default function Stopwatch() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return (
    <>
      <h2>{date.toLocaleTimeString()}</h2>
      <button>Start/Pause</button>
      <button>Stop</button>
    </>
  );
}
