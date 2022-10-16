import '../Styles/game-component.css';
import Level1 from './Levels/Level1';
import React, { useState, useEffect } from 'react';

const GameComponent = () => {

    const [level, setLevel] = useState(1);


    const displayLevel = () => {
        if (level === 1) {
            return (
                <Level1 
                    possibleNumbers={possibleNumbers}
                    numOfCards={3}
                />
            );
        }
    }

    const [possibleNumbers, setPossibleNumbers] = useState([
        'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
    ]);



    return (
        <div className="full-game-container">
            {displayLevel()}
        </div>
    );
}


export default GameComponent;