import React, {useState} from 'react';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Trending from './components/Trending'
import Welcome from './components/Welcome';
import Profile from './components/Profile';


function App() {
  const [lockin, setLockin] = useState(false); //preventing page viewing without login
  return (

    <div className="App">

      <Router>
        <Routes>
          {/* Change the paths to the right user */}
        {lockin && <Route path = "/Home" element = {<Home />}/>}
        <Route path = "/" element = {<Welcome />}/>
        {lockin && <Route path = "/profile" element = {<Profile/>}/>}
        <Route path = "/login" element = {<Login  setLockin={setLockin}/>}/>
        <Route path="/register" exact element={<Registration setLockin={setLockin}/>} />
        {lockin && <Route path = "/trending" element = {<Trending />}></Route>}
        </Routes>
    </Router>
    {/* <div className="footer mt-5">
        <hr />
        <h1>Raters</h1>
        <br />
      </div> */}
    </div>
  )
}

export default App;