import React, { useEffect, useState } from 'react';
import Card from '../Card';


const Level1 = ({
    possibleNumbers,
    numOfCards,
}) => {

    const [numbersDisplayed, setNumbersDisplayed] = useState([]);
    const [index, setIndex] = useState(0);

    const randomNumberIdx = () => {
        return Math.floor(Math.random() * possibleNumbers.length);
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

    useEffect(() => {
        for (let i = 0; i < {numOfCards}; i++) {
            setNumbersDisplayed(current => [...current, `${possibleNumbers[randomNumberIdx()]}`]);
            console.log("Setting up numbers...");
        }
    }, [Card])

    useEffect(() => {
        shuffleArray(numbersDisplayed);
    }, [numbersDisplayed]);




    return (
        <div className="full-cards-container">
            <Card
                index={index}
                numbersDisplayed={numbersDisplayed}
                setNumbersDisplayed={setNumbersDisplayed}
                shuffleArray={shuffleArray}
            />
            <Card
                index={index + 1}
                numbersDisplayed={numbersDisplayed}
                setNumbersDisplayed={setNumbersDisplayed}
                shuffleArray={shuffleArray}
            />
            <Card
                index={index + 2}
                numbersDisplayed={numbersDisplayed}
                setNumbersDisplayed={setNumbersDisplayed}
                shuffleArray={shuffleArray}
            />
        </div>
    );
}

export default Level1;