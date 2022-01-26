import React from 'react';
import { Link } from 'react-router-dom';
import GameDetails from './GameDetails';
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
                     <div class="row mx-md-n5">
                  <div class="col px-md-5">
                    <div class="p-3 border bg-light">
                      <div class="card" style={{ width: "18rem" }}>
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
                  <div class="col px-md-5">
                    <div class="border bg-light">
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

