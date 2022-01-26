import React from "react";
import { render } from "react-dom";

function GameDetails ( props ) {

    console.log(props.location);
    const { game } = props;

    // React.useEffect(() =>{
    //   game.window.location;
    // })

    return (
      <div>
        <h6 className="text-black">{game.name}</h6>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <p>Genre(s):</p>
          { 
            game.genres.map(g => `${g.name} | `)
          }

        <p>Platform(s):</p>
          { 
            game.platforms.map(p => `${p.platform.name} | `)
          }
        <ul>
          {
            // game.short_screenshots.map(ss => <li><img src={ss.image} alt='screenshot'></img></li>)
          }
        </ul>
      </div>
    );
  };
  export default GameDetails;
