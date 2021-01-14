import "./App.css";
import React, { useState } from "../node_modules/react";
import Clock from "./Clock.js";
import Stopwatch from "./Stopwatch.js";

function App() {
  const [time, setTime] = useState(new Date());

  return (
    <>
      <Clock time={time.toLocaleTimeString()} setTime={setTime}></Clock>
      <Stopwatch></Stopwatch>
    </>
  );
}

export default App;
