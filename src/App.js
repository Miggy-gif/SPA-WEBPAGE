import React, { useState } from "react";
import './App.css';
import { Register } from "./Register";
import { HomePage } from "./Homepage";

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [currentForm, setCurrentForm] = useState('login');
  const [home, setHome] = useState();

  const toggleForm = () => {
    if (currentForm === 'register'){
      setCurrentForm('login');
    }
    else{
      setCurrentForm('register');
    }
  }

  const Home = (e) => {
    if (home){
        setHome(false)
    }
    else{
    setHome(true)
    }
  }

  if (home){
    return(
      <div>
        <HomePage logout={Home}/>
      </div>
    )
  }
  return (
    /*
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    */
    <div className="App">
      {
        currentForm === "register" ? (<Register Login = {toggleForm}/>) : (
        <div className="auth-form-container">
        <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@example.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button onClick={Home}>Login.</button>
        <button className="link-btn" onClick={toggleForm} >Don't have an account? Register here.</button>
        </div>)
      }
    </div>
  );
}

export default App;
