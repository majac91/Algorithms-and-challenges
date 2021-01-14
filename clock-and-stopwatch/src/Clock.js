import React, { useEffect } from "../node_modules/react";

export default function Clock(props) {
  const { time, setTime } = props;

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return <h2>{time}</h2>;
}
