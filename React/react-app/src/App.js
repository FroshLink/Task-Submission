import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cards from './components/Cards/Cards';
//
import CardDetail from './components/CardDetail/CardDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
            <Cards></Cards>
            </Route>
            <Route path="/cards">
            <Cards></Cards>
            </Route>
            <Route path="/card/:id">
              <CardDetail/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
