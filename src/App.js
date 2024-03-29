import React, { useEffect, useState } from "react";
import IdleTimer from "./IdleTimer";

export default function App() {
  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 5, //expire after 10 seconds
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired: () => {
        //do something if expired on load
        setIsTimeout(true);
      }
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return <div>{isTimeout ? "Timeout" : "Active"}</div>;
}
