import '../Styles/game-component.css';
import Level1 from './Levels/Level1';
import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

const GameComponent = () => {

    const [level, setLevel] = useState(1);


    const displayLevel = () => {
        if (level === 1) {
            return (
                <Level1 
                    possibleNumbers={possibleNumbers}
                    numbersDisplayed={numbersDisplayed}
                    setNumbersDisplayed={setNumbersDisplayed}                    
                />
            );
        }
        else if (level === 2) return <Level2 />
        else if(level === 3) return <Level3 />
        //else if(level === 4) return <Level4 />
        //else if(level === 5) return <Level5 />
        //else if(level === 6) return <Level6 />
        //else if(level === 7) return <Level7 />
    }

    const [possibleNumbers, setPossibleNumbers] = useState([
        'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
    ]);

    const [numbersDisplayed, setNumbersDisplayed] = useState([]);
    const [numberToDisplay, setNumberToDisplay] = useState();
    const [shuffledNumbers, setShuffledNumbers] = useState([]);
    const [cardID, setCardID] = useState(0);
    const [icon, setIcon] = useState(['0', 'Hearts', 'Clubs', 'Spades', 'Diamonds']);

    const randomNumberIdx = () => {
        let genNumber = Math.floor(Math.random() * possibleNumbers.length);
        return genNumber;
    }


    const randomIconIdx = () => {
        return Math.floor(Math.random() * 4) + 1;
    }


    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const removeUndefined = (array) => {
        array.filter(element => {
            return element !== "undefined";
        })
    }



    const onCardClick = () => {
        shuffleArray(numbersDisplayed);
        setShuffledNumbers(removeUndefined(numbersDisplayed))
        console.log("Clicked a Card");
    }


    return (
        <div className="full-game-container">
            {displayLevel()}
        </div>
    );
}


export default GameComponent;