import React from 'react';
import { Link } from 'react-router-dom';
import GameDetails from './GameDetails';
import "./GameCard.css";

const Results = (props) => {

  return (
    <div className="results-container">
  
      {
        props.gameResults.map(game => (
          <div className="" key={game.id}>
            {/* <Link to={{
              pathname: `/game/${game.name}`,
              gameProps:{
                game: game
              }
            }}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game"/>
            </Link>
            <ul>
            </ul> */}
                     <div class="row">
                  <div class="col">
                    <div class="card cards">
                      <div class="card cards">
                        <img
                          src={game.background_image}
                          alt="game"
                          className="card-img-top"
                          alt="..."
                        />
                        {/* <div class="card-body">
          <p class="card-text">
          
          </p>
        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="border">
                      <GameDetails game={game} />
                    </div>
                  </div>
                </div>
              </div>
          
        ))
      }
      </div>    
  );
}

export default Results;

