import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopGames from "./components/TopGames";
import SearchField from "./components/SearchField";
import NavBar from "./components/NavBar";
import GameDetails from "./components/GameDetails";
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/topgames' component={TopGames} />
          <Route path='/searchfield' component={SearchField} />
          <Route path='/game/:name' component={GameDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


