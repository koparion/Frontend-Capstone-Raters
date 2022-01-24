import React, { useState } from 'react';
import Results from './Results';

const SearchField = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?search=${slug}`)
    .then(response => response.json())
    .then(({results}) => {
      results === undefined ? alert('No Games Found') : setGameResults(results)
    })
    setSearchTerm("")
  }

  return (
    <div className="game-search">
      <h1>Search Games</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange}/>
          <br></br>
          <input type="submit"/>
        </form>
        <Results gameResults={gameResults} />
    </div>
  );
}

export default SearchField;


