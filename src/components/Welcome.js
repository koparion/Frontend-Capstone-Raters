import React from 'react';
import Login from './Login';
import Registration from './Registration';
import {Link} from "react-router-dom"

function Welcome(props) {

  return <div className='bod'>
      <h1 className='text-white'>Welcome</h1>
      <h3 className='text-white text-capitalize'>Please sign in OR register below to continue.</h3>  
  <div>
  <Login setLockin={props.setLockin}/>
  <Registration />
  {/* <Link className='btn login' to={'/login'}>Login Here</Link>
  <Link className='btn login' to={'/register'}>Register Here</Link> */}
  </div>
  </div>
}

export default Welcome;
