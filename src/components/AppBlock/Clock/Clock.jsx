import React, { useState, useEffect } from "react";
import style from "./Clock.module.scss";
import "./img/clock.png"

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => { 
    function refreshClock() {
        setTime(new Date().toLocaleTimeString());
    }
    const timerId = setInterval(refreshClock, 1000); 
    return function clean() { 
      clearInterval(timerId); 
    }; 
  }, []);
  return (
    <div className={style.wrapper}>
      <div className={style.clock}>
        {time}
      </div>
    </div>
  );
}

export default Clock;
