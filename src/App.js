import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Move from "./move/move";
import Pokemon from "./pokemon/pokemon";
import TopBar from "./displays/topbar";
import Blank from "./blank/blank";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TopBar text={'PokemonTeam'} />
          <Home />
        </Route>
        <Route path='/pokemon'> <Pokemon /> </Route>
        <Route path='/move'> <Move /> </Route>
        <Route path='/team'> <Blank /> </Route> 
        <Route path='/battle'> <Blank /> </Route> 
      </Switch>
    </Router>
  );
}

export default App;
