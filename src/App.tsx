import React from 'react';
import icon from './images/icon.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="icon" alt="logo" />
        <p className="title">
          Yiftach Ilan Haviv
        </p>
      </header>
    </div>
  );
}

export default App;
