import React from 'react';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/Profile';
import LogIn from './components/Registration';
import Trending from './components/Trending'
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          {/* Change the paths to the right user */}
        <Route path = "/" element = {<Home />}/>
        <Route path = "/profile" element = {<UserProfile />}/>
        <Route path = "/registration" element = {<LogIn/>}/>
        <Route path = "/trending" element = {<Trending />}></Route>
        </Routes>
    </Router>

    </div>
  );
}

export default App;
