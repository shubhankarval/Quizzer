import React, { useState, useEffect }  from "react";
import "./StartQuiz.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClock, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function StartQuiz({ onStartQuiz, quizTime, title, questions }) {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay to allow CSS to apply
    const animationTimeout = setTimeout(() => {
      setIsActive(true);
    }, 200);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
      <div className={`start-card ${isActive ? "active" : ""}`}>
        <div className="purple-top"></div>
        <div className="start-content">
          <h1>{title} Quiz</h1>
          <span>
            <FontAwesomeIcon icon={faClock} /> {Math.floor(quizTime / 60)} min
          </span>
          <span>
          <FontAwesomeIcon icon={faPenToSquare} /> {questions} Questions
          </span>
          <button onClick={onStartQuiz}>Start</button>
        </div>
      </div>
  );
}
