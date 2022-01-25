import React, { Fragment, useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {

    const [users, setUsers] = useState([]);

    const getUser = async () => {
        try {
            const response = await fetch("http://localhost:7200/users");
            const userData = await response.json();

            setUsers(userData);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <Fragment>
            
            <h1 className=" container mt-5 text-center text_h1 ">  Profile  </h1>
            <div className="text-center">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="image rounded-circle mt-5" alt="Profile Image">
                </img>
            </div>
            
            <div className="d-flex flex-column mt-5 container  p-5">
               
                <h3 className = "text-center t_color">Profile Info</h3> 
            
                
                {users.map((u) => (
                    <ul className="list-group list-group-flush p-5" key={u.id}>
                        <li className="list-group-item background">Name: {u.firstname} {u.lastname}</li>
                        <li className="list-group-item background">UserName: {u.username}</li>
                        <li className="list-group-item background">Country: {u.country} </li>
                        <li className="list-group-item background">Join Date: {u.joindate}</li>
                    </ul>
                    ))}
            </div>
        
        </Fragment>

    );
}

export default Profile;

