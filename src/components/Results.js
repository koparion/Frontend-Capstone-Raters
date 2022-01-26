import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Game from './Game';

const Results = (props) => {


  return (
    <div className="results-container">
       <div class="bod">
      <ul>
      {
    props.gameResults.map(game => (
          <li key={game.id}>
          <Link to={{
              pathname: `/game/${game.name}`,
              gameProps:{
                game: game
              }
            }}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game"/>
            </Link>
            
          </li>
        ))
      }
      </ul>
      </div>
    </div>
  );
    
}

export default Results;


