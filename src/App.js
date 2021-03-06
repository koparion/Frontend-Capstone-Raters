import React, { useState, useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Trending from "./components/Trending";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import TopGames from "./components/TopGames";
import SearchField from "./components/SearchField";
import GameDetails from "./components/GameDetails";
import Comment from "./components/Comment";
import Loading from "./components/Loading";
import EditComment from "./components/EditComments";


function App() {
  const [lockin, setLockin] = useState(false); //preventing page viewing without login
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Router>
            <Routes>
              {/* Change the paths to the right user */}
              <Route path="/Home" element={<Home />} />
              {lockin && <Route path="/profile" element={<Profile />} />}
              <Route path="/login" element={<Login setLockin={setLockin} />} />
              <Route path="/register" exact element={<Registration />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/topgames" element={<TopGames />} />
              <Route path="/searchfield" element={<SearchField />} />
              <Route path="/comments" element={<Comment />} />
              <Route path="/game/:name" element={<GameDetails />} />
              <Route path="/" element={<Welcome setLockin={setLockin}/>} />
            </Routes>
          </Router>
          {/* <div className="footer mt-5">
        <hr />
        <h1>Raters</h1>
        <br />
      </div> */}
        </div>
      ) : (
         <Loading />
       )} 
    </>
  );
}

export default App;
