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
                />
            );
        }
    }

    const [possibleNumbers, setPossibleNumbers] = useState([
        'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
    ]);

    //const [icon, setIcon] = useState(['0', 'Hearts', 'Clubs', 'Spades', 'Diamonds'])

    //const removeUndefined = (array) => {
    //    array.filter(element => {
    //        return element !== "undefined";
    //    })
    //}


    return (
        <div className="full-game-container">
            {displayLevel()}
        </div>
    );
}


export default GameComponent;