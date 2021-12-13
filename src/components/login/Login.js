import React from 'react';
import  './login.css';

const Login = ({userEmail , SetUserEmail}) => {
    
   const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value;
        if(email !== ""){

            SetUserEmail(e.target.elements.email.value)
        }
    }

    console.log(userEmail);
    return (
        <div className="login-form">
        <h1 >Login to ReactJS quiz </h1>
             <form className="login" onSubmit = { handleSubmit }>
             <input className="input" type="textarea" name= "email"  placeholder="Enter your username"/>
            <br/>
            <br/>
            <input className="input" type="password" name= "password" placeholder="Enter your password"/>
            <br/>
            <br/>
            <button className = "login-button"> Login </button>
            <br/>
            <br/>
                
             </form>              
        </div>
    )
}

export default Login;
