import React, { useEffect, useState } from "react";
import {
  Link,
  Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import DisplayGameDetails from "./DisplayGameDetails";
import GameDetails from "./GameDetails";

const TopGames = () => {
  useEffect(() => {
    fetchGames();
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch("https://rawg.io/api/collections/must-play/games")
      .then((resp) => resp.json())
      .then(({ results }) => setGames(results));
  };

  return (
    <div className="mt-4 bod">
      
        <div className="container">
          <div className="">
            {games.map((game) => (
              <div className="" key={game.id}>
                {/* <NavLink
                  to={{
                    pathname: `/game/${game.name}`,
                    gameProps: {
                      game: game,
                    },
                  }}
                > */}
                {/* <h3>{game.name}</h3>
                  <img src={game.background_image} alt="game" />
                </NavLink> */}
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
            ))}
          </div>
        </div>
    
    </div>
  );
};
export default TopGames;
