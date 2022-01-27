import React, { useEffect, useState } from "react";
import {
  Link,
  Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import GameDetails from "./GameDetails";
import "./GameCard.css";

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
              <div className="row">
                <div className="col">
                  <div className="p-3">
                    <div className="card cards">
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
                <div className="col mt-5 p-4">
                  <div className="border">
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
