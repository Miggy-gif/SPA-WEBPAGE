import React, { useState } from "react";
import axios from "axios";


export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");


const handleSubmit = (e) => { 
  e.preventDefault();

  if (email === '' || pass === '' || name === '' || lastname === '' || number === '' || gender === '' || birthdate === '') {
    alert('Fill out details first!');
    return;
  }

  const userData = {
    name: name,
    email: email,
    password: pass,
    re_password: pass,
    lastname: lastname,
    number: number,
    gender: gender,
    birthdate: birthdate
  };

  axios.post('http://yourbackendapi.com/register', userData)
    .then(response => {
      
      alert('You have successfully registered!');
      window.location.href = "http://localhost:3002/";
    })
    .catch(error => {
      
      alert('Registration failed.');
    });
}


  return (
    <div className="auth-form-container">
      <h2>Register</h2>

      <label htmlFor="name">First Name</label>
      <input value={name} name="name1" onChange={(e) => setName(e.target.value)} id="name1" placeholder="Enter your First Name Here .." />
      <label htmlFor="lastname">Last name</label>
      <input value={lastname} name="lastname" onChange={(e) => setLastname(e.target.value)} id="lastname" placeholder="Enter your Last Name Here .." />
      <label htmlFor="name">Mobile Number</label>
      <input value={number} name="number" onChange={(e) => setNumber(e.target.value)} id="number" placeholder="Enter your Mobile Number Here..." />
      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Others</option>
      </select>
      <label htmlFor="birthdate">Birthdate:</label>
      <input type="date" id="birthdate" name="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      <label htmlFor="email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
      <label htmlFor="password">password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
      <button onClick={handleSubmit}>Register</button>

      <button className="link-btn" onClick={props.Login}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
