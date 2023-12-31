import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePollVertical,
  faHome,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./EndQuiz.css";

export default function EndQuiz({ score}) {
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

  const handleReload = () => {
    // Reload the page when the button is pressed
    window.location.reload();
  };

  return (
    <div className={`end-card ${isActive ? "active" : ""}`}>
      <div className="purple-top"></div>
      <div className="end-content">
        <h1>
          <FontAwesomeIcon icon={faSquarePollVertical} /> Results
        </h1>
        <span>{score} correct</span>
        <Link to="/">
          <button>
            <FontAwesomeIcon icon={faHome} /> Home
          </button>
        </Link>
          <button onClick={handleReload}>
            <FontAwesomeIcon icon={faArrowRotateRight} /> Replay
          </button>
      </div>
    </div>
  );
}
