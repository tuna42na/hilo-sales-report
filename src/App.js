import React from 'react';
import tunalogo from './tunalogo.svg';
import {HiloDaily} from './components/HiloDaily';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <HiloDaily/>
      </body>
      <header className="App-header">
        <img src={tunalogo} className="App-logo" alt="logo" />
        <p>HiLo Sales App</p>
      </header>
    </div>
    
  );
}

export default App;
