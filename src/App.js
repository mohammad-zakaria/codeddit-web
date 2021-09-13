import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from '../src/data/data.json'
import Home from './components/Home/Home/Home';

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(data);
  }, []);
  return (
    <div className="App">
      <Home data={landingPageData}></Home>
    </div>
  );
}

export default App;
