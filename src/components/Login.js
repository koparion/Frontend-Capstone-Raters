import React, {useState} from 'react';
import {Navigate} from 'react-router-dom'
import Home from './Home';
import axios from 'axios';
import "./Text.css";

function Login(props) {
    const [username, setUsername] = useState(""); //will hold the username and password for the login. will be checked in the login function.
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    console.log(props)
    const {setLockin} = props;
    const login = async (e) => {
      e.preventDefault();
        // try {
        //   const body = {
        //     username: username,
        //     password: password,
        //   };
        //   // const response = await fetch(`https://capstoneapinodejs.herokuapp.com/login/${username}`, {
        //   const response = await fetch(`http://localhost:5000/login/${username}`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(body),
        //   });
        //   setLockin(true); // making the page visible
        //   setRedirect(true);
        //   console.log(response);
        // } catch (err) {
        //   console.error(err.message);
        // }
        try{
          // axios.post(`http://localhost:5000/login/${username}`,{
          axios.post(`https://capstoneapinodejs.herokuapp.com/login/${username}`,{
              username: username,
              password: password,
          }).then((response)=>{
              console.log(response);
              setRedirect(true);
              setLockin(true); // making the page visible
          })
      }catch(err)
      {
          console.error(err.message);
      }
    }
      if (redirect) {
        return (
          <>
            <Navigate to={"/profile"} />
          </>
        );
      }
  return <div className='container'>
      <div className="login bod mt-5">
        <form onSubmit={login}>
          <h1>Sign In</h1>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn" onClick={login}> Login </button>
          </form>
        </div>

  </div>;
}

export default Login;
