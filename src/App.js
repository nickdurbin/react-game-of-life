import React from 'react';
import './App.scss';
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <h1>Game of Life</h1>
      </header>
    </div>
  );
}

export default App;
