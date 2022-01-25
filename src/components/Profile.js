import React, { Fragment,useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Profile.css"

const Profile = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const userData = await response.json();

      setUsers(userData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
      <a class="navbar-brand text-white" href="./trending"><span><h1>Raters</h1></span></a>
        <ul className="navbar-nav">
          {/* <Link className='nav-item btn btn-dark' to="/logIn">Login</Link> */}
          <Link className="nav-item btn btn-dark active" to="/profile">
            Profile
          </Link>
          <Link className="nav-item btn btn-dark" to="/trending">
            Trending
          </Link>
          <Link className='nav-item btn btn-dark' to={'/searchfield'}>
        <li>Search</li>
        </Link>
        </ul>
        {/* <form className ="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
      </nav>
  <div className="profile">
      <h1 className=" container text-center text_h1 text-capitalize"> Meet your fellow users </h1>
      <div className="text-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="image rounded-circle mt-5"
          alt="Profile Image"
        ></img>
      </div>

      <div className="d-flex flex-column mt-5 container  p-5">
        <h3 className="text-center t_color">Profile Info</h3>

        {users.map((u) => (
          <ul className="list-group list-group-flush p-5" key={u.id}>
            <li className="list-group-item background">
              Name: {u.firstname} {u.lastname}
            </li>
            <li className="list-group-item background">
              UserName: {u.username}
            </li>
            <li className="list-group-item background">
              Country: {u.country}{" "}
            </li>
            <li className="list-group-item background">
              Join Date: {u.joindate}
            </li>
          </ul>
        ))}
      </div>
      </div>
    </Fragment>
  );
};

export default Profile;
