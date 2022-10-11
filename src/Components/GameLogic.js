import React, { useState, useEffect } from 'react';
import GameComponent from './GameComponent';
import GameStart from './GameStart';

const GameLogic = () => {

    const [displayGame, setDisplayGame] = useState(0);
    const [cardsDisplayed, setCardsDisplayed] = useState('');


    const display = () => {
        if (displayGame === 1) {
            return (
                <GameComponent 
                    cardsDisplayed={cardsDisplayed}
                    setCardsDisplayed={setCardsDisplayed}
                />
            );
        }
        if (displayGame === 0) {
            return (
                <GameStart
                    displayGame={displayGame}
                    setDisplayGame={setDisplayGame}
                />
            );
        }
    }

    return (
        <div>
            {display()}
        </div>
    );
}

export default GameLogic;