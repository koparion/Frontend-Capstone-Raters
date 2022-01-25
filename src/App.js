import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopGames from "./components/TopGames";
import SearchField from "./components/SearchField";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/topgames' element={<TopGames />} />
          <Route path='/searchfield' element={<SearchField />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
