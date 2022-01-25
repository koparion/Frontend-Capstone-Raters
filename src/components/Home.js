import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
const Home = () =>{
return(
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
        <ul className='navbar-nav'>
           <Link className='nav-item btn btn-dark' to="/profile">Profile</Link>
           <Link className='nav-item btn btn-dark' to="/trending">Trending</Link>
            </ul>
            {/* <form className ="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
</nav>
    </Fragment>
)
}
export default Home;