import React from 'react';

import Questions from '../../questions';
import './question.css';


const Question = ({ userEmail, score, setScore, currentQuestion, setCurrentQuestion, setSubmit }) => {

    const handleAnswer = (iscorrect) => {
        if (iscorrect) {
            setScore(score + 1);


        }

        const questionNumber = currentQuestion + 1;
        if (questionNumber < Questions.length) {
            setCurrentQuestion(questionNumber);
        }

    };


    const handlePrevious = () => {
        if (currentQuestion >= 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
        else {
            setCurrentQuestion(0)
        }
    }

    const handleSkip = () => {
        if (currentQuestion < 9) {

            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setCurrentQuestion(9);
        }
    }
   const submitAnswers = () => {
      setSubmit(true);
   }



    return (
        <div className='question'>
            <h2>React Quiz</h2>
            <p>welcome {userEmail}</p>
            <div className='question-component'>
                <span >Question {currentQuestion + 1} </span>/{Questions.length}
            </div>
            <div className='question-text' >{Questions[currentQuestion].questionText} </div>
            <div className='answer-section'>
                {Questions[currentQuestion].answers.map((answer,i) => (
                    <button id='options' key={i} className="neutral" onClick={() => handleAnswer(answer.isCorrect)} >{answer.answerText} </button>
                ))}
            </div>
            <div >
            <div className='nav-btn'>

              {currentQuestion > 0 && (
                 
                 <button className='navigate' onClick={handlePrevious}>Previous Question</button>
              )}
              {currentQuestion < 9 &&(

                <button className='navigate' onClick={handleSkip}>Skip Question</button>
              )}
            </div>
              <br/>
              {currentQuestion === 9 && (
                <button className='submit' onClick={submitAnswers}>Submit</button>

              )


              }
            </div>

        </div>
    )
}

export default Question;
