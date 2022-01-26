import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Game from './Game';

const TopGames = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  

  return (
    <div className='d-flex mt-4 bod'>
      <ul className=''>
      {
        games.map(game => (
          <div className='col-6 justify-content-center'>
          <li className="text-center" key={game.id}>
            <Link onClick={<Game game={game}/>} to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
            <h3>{game.name}</h3>
            <img className="col-2 justify-content-center" src={game.background_image} alt="game"/>
            </Link>
            {/* <div className='col-6'>
              <li><Game game={game}/></li>
          </div> */}
          </li>
          
          

          </div>
          
        ))
      }
      </ul>
    </div>
  )
}

export default TopGames;