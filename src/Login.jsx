import React, { useState, setCurrentForm } from "react";
import App from './App';



export const Login = (props,{}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(email);
    }

    const Test = (e) =>{
        alert('Test!')
    }
   
    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@example.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button onClick={setCurrentForm}>Login.</button>
            <form className="login-form" onSubmit={handleSubmit}>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </form>
        </div>
    )
}