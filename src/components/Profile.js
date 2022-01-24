import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';



const Profile = () => {
    
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
        <ul className='navbar-nav'>
           <li className='nav-item'> <Link to="/logIn" >Login</Link></li>
           <li className='nav-item'> <Link to="/profile">Profile</Link></li>
           <li className='nav-item'> <Link to="/trending">Trending</Link></li>
            </ul>
            <form className ="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
        </Fragment>
    )
}

export default Profile