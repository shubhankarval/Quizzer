import React, { useState, useEffect } from "react";
import './Timer.css'

export default function Timer({maxTime, completeQuiz}) {
    const [remainingTime, setRemainingTime] = useState(maxTime);

    useEffect(() => {
      setRemainingTime(maxTime);
    }, [maxTime]);

    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    useEffect(() => {
      if (remainingTime === 0) {
        setTimeout(() => {
          // alert("Time expired!");
          completeQuiz();
        }, 1000); // Delay the alert by 1 second (1000ms)
      }
    }, [remainingTime]);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
  
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;  
  
    const getTimerBarColor = () => {
      const percentageRemaining = (remainingTime / maxTime) * 100;
      if (percentageRemaining <= 5) {
        return "red";
      }
      return "green";
    };
  
    return (
      <div className="timer">
        <div className="timer-bar-container">
          <div
          className="timer-bar"
          style={{
            width: `${(remainingTime / maxTime) * 100}%`,
            backgroundColor: getTimerBarColor(),
          }}
        ></div>
        </div>
        <div className="remaining-time">{remainingTime === Infinity ? '' : formattedTime}</div>
      </div>
    );
  }
