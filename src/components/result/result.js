import React from 'react';
import './result.css';

const Result = ({score, userEmail, setCurrentQuestion,setScore, setSubmit }) => {
    const tryAgain = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSubmit(false);
    }
    return (
        <div className='result'>
           <h1 id='title'>Your result for the ReactQuiz</h1>
           <h2 id='name'> Dear, {userEmail}</h2>
           <h3 id='score'> You scored {score} marks out of 10 in the React Quiz</h3>
           <div>
               <h2 id='tryagain'>Want to try again?</h2>
               <button className='button' onClick={ tryAgain}>Try Again</button>
           </div>
        </div>
    )
}

export default Result;
