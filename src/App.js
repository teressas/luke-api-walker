import './App.css';
import { Link, Route, Switch } from "react-router-dom"
import DisplayPeople from './components/DisplayPeople';
import DisplayPlanet from './components/DisplayPlanet';
import SearchForm from './components/SearchForm';


function App() {

  return (
    <div>
      <p>
        <Link to="/">Home</Link>|
        <Link to="/:selectedItem/:id">People</Link>|
        <Link to="/:selectedItem/:id">Planets</Link>
      </p>
      <Switch>
        <Route exact path="/people/:id">
          <SearchForm />
          <DisplayPeople />
        </Route>
        <Route exact path="/planets/:id">
          <SearchForm />
          <DisplayPlanet />
        </Route>
        <Route path="/">
          <SearchForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
