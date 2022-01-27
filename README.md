
# Raters

A Web Application That Helps You Connect With Gaming Enthusiasts!

## Description

in this app the user have to create a user account to start with. Then he is directing to the user profiles with al the users account in it. Then user can visit the trending page or search which game he want to know about. 
He can comment to the games what he wants. 


## Key Features

- Find the tending games and top rated games.
- Search the Games you want.
- Add/Edit Comments. 




## Usage/Examples

```javascript
import Home from './components/Home';
import Login from './components/Login';
import Trending from './components/Trending'
import TopGames from "./components/TopGames";
import SearchField from "./components/SearchField";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Change the paths to the right user */}
        <Route path = "/Home" element = {<Home />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/trending" element = {<Trending />}></Route>
        <Route path='/topgames' element={<TopGames />} />
        <Route path='/searchfield' element={<SearchField />} />
        </Routes>
    </Router>
    </div>
  )
}
```

## Demo





## Tech Stack

**Frontend:** JavaScript, React, Redux, CSS, HTML, Bootstrap

**Backend:** Postman, PgAdmin, NodeJS, Express, SQL, Postgres







## Contributors

- [@koparion](https://github.com/koparion)
- [@simonchrist](https://github.com/simonchrist)
- [@jlorenzo58](https://github.com/jlorenzo58)
- [@ChibuzorOkoye](https://github.com/ChibuzorOkoye)
- [@Gihan1937](https://github.com/Gihan1937)

