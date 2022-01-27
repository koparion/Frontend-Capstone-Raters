import React from 'react';
import Login from './Login';
import Registration from './Registration';

function Welcome(props) {

  return <div className='bod'>
      <h1 className='text-white'>Welcome</h1>
      <h3 className='text-white text-capitalize'>Please sign in OR register below to continue.</h3>  
  <div>
  <Login setLockin={props.setLockin}/>
  <Registration />
  </div>
  </div>
}

export default Welcome;
