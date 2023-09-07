import React, { useState, useEffect } from "react";
import "./TakeQuiz.css";
import Timer from "./Timer";

export default function TakeQuiz({ quizTime, onCompleteQuiz, blur, questions, setScore }) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonText, setButtonText] = useState("Next Question");
  const [time, setTime] = useState(Infinity);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    // Update the state variable when the received prop changes
    if (!blur) {
      setTime(quizTime);
    }
    else{
      setTime(Infinity);
    }
  }, [blur]); // Run this effect whenever the blur changes

  const completeQuiz = () => {
    setScore(`${correct}/${questions.length}`)
    onCompleteQuiz();
  }

  const handleNextQuestion = () => {
    if (!selectedOption) {
      alert("Please select an answer.");
    } 

    else{

      let changed = false;
      if(selectedOption === currentQuestion.correctAnswer){
        setCorrect(correct + 1);
        changed = true;
      }
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
  
        if (currentQuestionIndex === questions.length - 2) {
          setButtonText("Complete Quiz");
        }
      } 
      
      else{
        if (changed){
          setScore(`${correct + 1}/${questions.length}`);
        }
        else{
          setScore(`${correct}/${questions.length}`);
        }
        onCompleteQuiz();
      }
    }
    
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={blur ? 'blur' : ''}>
      <Timer className='quiz-timer' maxTime={time} completeQuiz={completeQuiz} />
      <div className="quiz-container">
        <div className="purple-top"></div>
        <div className="quiz-interface">
          <div className="question">
            <span>{currentQuestionIndex + 1}.</span>
            {currentQuestion.question}
          </div>
          <ul>
            {currentQuestion.choices.map((choice, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={choice}
                    checked={selectedOption === choice}
                    onChange={() => handleOptionChange(choice)}
                  />
                  {choice}
                </label>
              </li>
            ))}
          </ul>
          <div className="quiz-button-wrapper">
          <button onClick={handleNextQuestion}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
