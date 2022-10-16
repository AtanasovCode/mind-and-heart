import React, { useState, useEffect } from 'react';
import GameComponent from './GameComponent';
import GameStart from './GameStart';
import Loading from './Loading';

const GameLogic = () => {

    const [displayGame, setDisplayGame] = useState(0);

    useEffect(() => {
        console.log("Start Game Component Rendered");
    }, [GameStart])

    const display = () => {
        if (displayGame === 1) {
            return (
                <GameComponent />
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