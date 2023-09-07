import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Quiz.css";

import EndQuiz from "./EndQuiz";
import StartQuiz from "./StartQuiz";
import TakeQuiz from "./TakeQuiz";

const ModalOverlay = () => {
  return <div className="modal-overlay" />;
};

export default function Quiz() {
  const location = useLocation();
  const id = location.state.id;
  const [data, setData] = useState(null);

  var quizTime;
  var title;
  var questions;

  useEffect(() => {
    axios
      .get(`https://quizzer-backend-jz99.onrender.com/quiz/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (data) {
    quizTime = data.time;
    // quizTime = 40;
    title = data.title;
    questions = data.questions;
  }

  const [currentState, setCurrentState] = useState("start");
  const [blur, setBlur] = useState(true);
  const [score, setScore] = useState('');

  const startQuiz = () => {
    setCurrentState("quiz");
    setBlur(false);
  };

  const completeQuiz = () => {
    setBlur(true);
    setCurrentState("result");
  };

  return (
    <>

      {data && (
        <TakeQuiz
          onCompleteQuiz={completeQuiz}
          quizTime={quizTime}
          blur={blur}
          questions={questions}
          setScore={setScore}
        />
      )}
      {currentState === "start" && data && (
        <>
          <ModalOverlay />
          <StartQuiz
            quizTime={quizTime}
            onStartQuiz={startQuiz}
            title={title}
            questions={questions.length}
          />
        </>
      )}
      {currentState === "result" && data && (
        <>
          <ModalOverlay />
          <EndQuiz score={score} />
        </>
      )}
    </>
  );
}
