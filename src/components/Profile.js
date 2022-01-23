import React, { Fragment, useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {



    return (
        <Fragment className="">
            
            <h1 className="p-5 bg-secondary text-center text_h1">  Profile  </h1>
            <div class="text-center">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="image rounded-circle mt-5" alt="Profile Image">
                </img>
            </div>
            
            <div className="d-flex flex-column mt-5 container  p-5">
               
                   <h3 className = "text-center">Profile Info</h3> 
            
                <ul class="list-group list-group-flush">
                     <li className="list-group-item">User Name:</li>
                     <li className="list-group-item">Country:</li>
                    <li className="list-group-item">Join Date:</li>
                </ul>
            </div>
        
        </Fragment>

    );
}

export default Profile;