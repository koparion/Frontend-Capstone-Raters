import React from 'react';
import ReactLoading from 'react-loading'

function Loading() {
  const image = require('../images/welcomeimage.jpg');

  return <div className='container' >
      <div class="container h-100">
    <div class="row align-items-center h-100 mt-5">

      <h1 className='text-center justify-content-center '>Welcome to our Capstone </h1>
      <div className='d-flex justify-content-center align-items-center'>
      <ReactLoading
      className=''
        type="spinningBubbles"
        color="#0000FF"
        height={100}
        width={50}
      />
      </div>
      <img className="" style={{width: "100%", height: "100%", backgroundSize: "cover"}} src={image}/>
      </div>


      </div>
  </div>
}

export default Loading;
