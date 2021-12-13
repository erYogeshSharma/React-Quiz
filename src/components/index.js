import React from 'react'
import { useState } from 'react';
import Login from './login/Login';
import Question from './question/Question';
import Result from './result/result';



const Main = () => {
    const [userEmail , SetUserEmail] = useState( "null");
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [submit,   setSubmit] = useState(false);


     
    return (
        <div>
        {userEmail==="null"   && ( 
        <Login userEmail={userEmail} SetUserEmail={SetUserEmail} />
       ) }

       {(userEmail!=="null" && currentQuestion <= 9 && submit===false ) && (

        <Question userEmail={userEmail} score={score} setScore={setScore} currentQuestion={currentQuestion} setSubmit={  setSubmit} setCurrentQuestion={setCurrentQuestion} />
       )}
       {(submit === true ) &&(
           <Result score={score} userEmail={userEmail} setCurrentQuestion={setCurrentQuestion} setScore={setScore}  setSubmit={  setSubmit}   />
       )}
        </div>
    )
}

export default Main;
