import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GameLogic from './Components/GameLogic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="full-game-container">
    <GameLogic />
  </div>
);
