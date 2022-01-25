import React, {useState} from 'react';
import {Navigate} from 'react-router-dom'
import Home from './Home';


function Login(props) {
    const [username, setUsername] = useState(""); //will hold the username and password for the login. will be checked in the login function.
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setLockin} = props;
    const login = async () => {
        try {
          const body = {
            username: username,
            password: password,
          };
          const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          console.log(response);
          setRedirect(true);
          setLockin(true); // making the page visible
        } catch (err) {
          console.error(err);
        }
      };

      if (redirect) {
        return (
          <>
            <Navigate to={"/Profile"} />
          </>
        );
      }
  return <div className='container'>
      <div className="login bod mt-5">
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
          <button className="btn" onClick={login}> Sign In </button>

        </div>

  </div>;
}

export default Login;
