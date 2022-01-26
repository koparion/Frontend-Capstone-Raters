import React from "react";

const GameDetails = ( props ) => {

    console.log(props.location);
    const { game } = props;
  
    return (
      <div>
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <h3>Genre(s):</h3>
          { 
            game.genres.map(g => `${g.name} | `)
          }

        <h3>Platform(s):</h3>
          { 
            game.platforms.map(p => `${p.platform.name} | `)
          }
  
        <ul>
          {
            game.short_screenshots.map(ss => <li><img src={ss.image} alt='screenshot'></img></li>)
          }
        </ul>
      </div>
    );
  }
  
  export default GameDetails;