import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import GameDetails from './GameDetails';
import NavBar from './NavBar';
import SearchField from './SearchField';
import TopGames from './TopGames';


const Trending = () =>
{
    return(
        <Fragment>
            <nav className="navbar nav-tabs navbar-expand-lg navbar-light bg-dark justify-content-between">
            <a class="navbar-brand text-white" href="./trending"><span><h1>Raters</h1></span></a>
        <ul className='navbar-nav '>
           {/* <li className='nav-item'> <Link to="/logIn" >Login</Link></li> */}
           <Link className='nav-item btn btn-dark' to="/profile">Profile</Link>
           <Link className='nav-item btn btn-dark active text-color-green' aria-current="page" to="/trending">Trending</Link>
           <Link className='nav-item btn btn-dark' to={'/searchfield'}>
        <li>Search</li>
        </Link>
            </ul>
           
            {/* <form className ="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
</nav>

    <TopGames />
        </Fragment>
    )
}

export default Trending