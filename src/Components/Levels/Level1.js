import React, { useEffect, useState } from 'react';
import Card from '../Card';

const Level1 = ({
    possibleNumbers,
}) => {

    const [numbersDisplayed, setNumbersDisplayed] = useState([]);
    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(1);
    const [index3, setIndex3] = useState(2);
    const [withoutDuplicates, setWithoutDuplicates] = useState([]);
    const [shuffledNumbers, setShuffledNumbers] = useState([]);


    const checkForDuplicates = (array) => {
        const result = array.some(element => {
            if (array.indexOf(element) !== array.lastIndexOf(element)) {
                array.indexOf(element = element + 1);
            }

            return array;
        });

        return result;
    }

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
        for (let i = 0; i < 3; i++) {
            setNumbersDisplayed(current => [...current, `${possibleNumbers[randomNumberIdx()]}`]);
            console.log("Setting up numbers...");
        }
    }, [Card])

    useEffect(() => {
    //  setWithoutDuplicates([...new Set(numbersDisplayed)]);
        setShuffledNumbers(shuffleArray(numbersDisplayed))
    }, [numbersDisplayed]);


    //useEffect(() => {
    //    setWithoutDuplicates(shuffledNumbers);
    //}, [shuffledNumbers])



    return (
        <div>
            <Card
                index={index}
                numbersDisplayed={numbersDisplayed}
                withoutDuplicates={withoutDuplicates}
                setWithoutDuplicates={setWithoutDuplicates}
                shuffledNumbers={shuffledNumbers}
                setShuffledNumbers={setShuffledNumbers}
                shuffleArray={shuffleArray}
                checkForDuplicates={checkForDuplicates}
            />
            <Card
                index={index2}
                numbersDisplayed={numbersDisplayed}
                withoutDuplicates={withoutDuplicates}
                setWithoutDuplicates={setWithoutDuplicates}
                shuffledNumbers={shuffledNumbers}
                setShuffledNumbers={setShuffledNumbers}
                shuffleArray={shuffleArray}
                checkForDuplicates={checkForDuplicates}
            />
            <Card
                index={index3}
                numbersDisplayed={numbersDisplayed}
                withoutDuplicates={withoutDuplicates}
                setWithoutDuplicates={setWithoutDuplicates}
                shuffledNumbers={shuffledNumbers}
                setShuffledNumbers={setShuffledNumbers}
                shuffleArray={shuffleArray}
                checkForDuplicates={checkForDuplicates}
            />
        </div>
    );
}

export default Level1;