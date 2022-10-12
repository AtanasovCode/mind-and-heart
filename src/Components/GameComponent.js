import '../Styles/game-component.css';
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

const GameComponent = () => {

    const [numbersDisplayed, setNumbersDisplayed] = useState([]);
    const [shuffeledArray, setShuffeledArray] = useState([]);
    const [number, setNumber] = useState([
        '0', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
    ]);
    const [icon, setIcon] = useState(['0', 'Hearts', 'Clubs', 'Spades', 'Diamonds']);

    const randomNumberIdx = () => {
        let genNumber = Math.floor(Math.random() * number.length);
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


    const onCardClick = () => {
        shuffleArray(numbersDisplayed);
        setNumber(numbersDisplayed.filter(element => {
            return element !== "undefined";
        }));
    }

    useEffect(() => {
        console.log(number);
    }, [shuffleArray]);

    return (
        <div className="full-game-container">
            <CardComponent
                numbersDisplayed={numbersDisplayed}
                number={number}
                setNumbersDisplayed={setNumbersDisplayed}
                numberId={`${randomNumberIdx()}`}
                icon={`${icon[randomIconIdx()]}`}
                onCardClick={onCardClick}
                shuffeledArray={shuffeledArray}
                setShuffeledArra={setShuffeledArray}
            />
             <CardComponent
                numbersDisplayed={numbersDisplayed}
                number={number}
                setNumbersDisplayed={setNumbersDisplayed}
                numberId={`${randomNumberIdx()}`}
                icon={`${icon[randomIconIdx()]}`}
                onCardClick={onCardClick}
                shuffeledArray={shuffeledArray}
                setShuffeledArra={setShuffeledArray}
            />
             <CardComponent
                numbersDisplayed={numbersDisplayed}
                number={number}
                setNumbersDisplayed={setNumbersDisplayed}
                numberId={`${randomNumberIdx()}`}
                icon={`${icon[randomIconIdx()]}`}
                onCardClick={onCardClick}
                shuffeledArray={shuffeledArray}
                setShuffeledArra={setShuffeledArray}
            />
             <CardComponent
                numbersDisplayed={numbersDisplayed}
                number={number}
                setNumbersDisplayed={setNumbersDisplayed}
                numberId={`${randomNumberIdx()}`}
                icon={`${icon[randomIconIdx()]}`}
                onCardClick={onCardClick}
                shuffeledArray={shuffeledArray}
                setShuffeledArra={setShuffeledArray}
            />
        </div>
    );
}


export default GameComponent;