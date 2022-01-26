import React, { useState } from "react";
import Results from "./Results";
import { Link } from "react-router-dom";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLowerCase();

    setGameResults([]);
    fetch(
      `https://rawg.io/api/games?search=${slug}&key=8168270edeb44316bc96ab82242e931d`
    )
      .then((response) => response.json())
      .then(({ results }) => {
        results === undefined
          ? alert("No Games Found")
          : setGameResults(results);
      });
    setSearchTerm("");
  };

  return (
    <div className="game-search">
      <nav className="navbar nav-tabs navbar-expand-lg navbar-light bg-dark justify-content-between">
        {/* <Link className='d-flex display-3 ' to={'/trending'}>Raters</Link> */}
        <a className="navbar-brand text-white" href="./trending">
          <span>
            <h1>Raters</h1>
          </span>
        </a>
        <ul className="navbar-nav">
          {/* <li className='nav-item'> <Link to="/logIn" >Login</Link></li> */}
          <Link className="nav-item btn btn-dark" to="/profile">
            Profile
          </Link>
          <Link className="nav-item btn btn-dark" to="/trending">
            Trending
          </Link>
          <Link className="nav-item btn btn-dark active" to={"/searchfield"}>
            <li>Search</li>
          </Link>
          <Link className='nav-item btn btn-dark' to="/comments">
            Comments
            </Link>
        </ul>

        {/* <form className ="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
      </nav>
     
      <h1 className='mt-4'>Search Games</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <br></br>
        <input type="submit" />
      </form>
      <Results gameResults={gameResults} />
    </div>
  );
};

export default SearchField;
