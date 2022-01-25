import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to={'/topgames'}>
        <li>Top Games</li>
        </Link>
        <Link style={navStyle} to={'/searchfield'}>
        <li>Search</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;

