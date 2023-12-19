import React, { useState, useEffect } from "react";
import style from "./timer.module.css";
const Timer = () => {
  const targetDate = new Date(); // Set your target date and time here
  targetDate.setDate(targetDate.getDate() + 16);
  targetDate.setHours(21);
  targetDate.setMinutes(50);
  targetDate.setSeconds(20);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
      // Timer has reached the target time
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  return (
    <div className={`d-flex align-items-center gap-1 ${style.mainDiv}`}>
      <div>{timeRemaining.days}d : </div>
      <div>{timeRemaining.hours}h : </div>
      <div>{timeRemaining.minutes}m : </div>
      <div>{timeRemaining.seconds}s</div>
    </div>
  );
};

export default Timer;
