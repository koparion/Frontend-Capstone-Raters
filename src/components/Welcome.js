import React from 'react';
import Login from './Login';
import Registration from './Registration';

function Welcome() {

  return <div className='bod'>
      <h1 className='text-white'>Welcome</h1>
      <h3 className='text-white'>Please sign or register in below to continue.</h3>  
  <div>
  <Login/>
  <Registration />
  </div>
  </div>
}

export default Welcome;
