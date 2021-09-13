import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from '../src/data/data.json'
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(data);
  }, []);
  return (
    <Router className="App">
      <Switch>
        <Route path="/">
          <Home data={landingPageData}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
