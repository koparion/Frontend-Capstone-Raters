import React, { useState } from "react";
import Axios from "axios";
import './Registration.css';
import "../App.css";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");   //states that will store all registered information
  const [firstnameReg, setFirstNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [lastnameReg, setLastNameReg] = useState(""); 
  const [countryReg, setCountryReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [dateReg, setDateReg] = useState("");

  const [username, setUsername] = useState(""); //will hold the username and password for the login. will be checked in the login function.
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");   //will be used to hold a message that is returned from the backend if username and password arent found.

  //Axios.defaults.withCredentials = true;

  const register = async () => {     //function so that when user registers, the details get posted to the backend using app.post("/register",...)
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); 
      var yyyy = today.getFullYear();
      today = mm + ' ' + dd + ',' + yyyy;
      setDateReg(today);

      const body ={
        username: usernameReg,    //pass these to the backend.
        password: passwordReg,
        firstname: firstnameReg,
        lastname: lastnameReg,
        email:emailReg,
        country: countryReg,
        date: dateReg,
      }

      const response = await fetch("http://localhost:3001/register",{
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);
    } catch (err) {
        console.error(err.message);
    }
  };

  const login = async () => {
    try{
    const body={
      username:username,
      password:password
    }
    const response = await fetch("http://localhost:3001/login",{
      method: "POST",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(body)
    })
    console.log(response);
  }catch(err){
    console.error(err);
  }
};

  return (

    <div className="App">

    <div className="temp">
      <div className="header">
        <br/>
          <h1> </h1>
        <br/>
      </div>
      </div>
      <div className = "bod">
      <div className="login">
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Sign In </button>
      </div>
     
      <h1>{loginStatus}</h1>

      <div className="registration">
        <h1>Don't have an account yet? Register here</h1>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstNameReg(e.target.value);
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => {
            setLastNameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>Country</label>
        <input
          type="text"
          onChange={(e) => {
            setCountryReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>
      <br/>
      <br/>
      </div>
      <div className="footer">
        <hr/>
          <h1>Raters</h1>
        <br/>
      </div>
    </div>
  );
}