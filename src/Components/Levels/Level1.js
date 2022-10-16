import React, { useEffect, useState } from 'react';
import Card from '../Card';
import hearts from '../../Assets/Images/card-components/hearts.png';
import spades from '../../Assets/Images/card-components/spades.png';
import clubs from '../../Assets/Images/card-components/clubs.png';
import diamonds from '../../Assets/Images/card-components/diamonds.png';



const Level1 = ({
    possibleNumbers,
    numOfCards,
}) => {

    const [numbersDisplayed, setNumbersDisplayed] = useState([]);
    const [iconsDisplayed, setIconsDisplayed] = useState([]);
    const [index, setIndex] = useState(0);

    const randomNumberIdx = () => {
        return Math.floor(Math.random() * possibleNumbers.length);
    }

    const randomIcon = () => {
        const number = Math.floor(Math.random() * 4) + 1;
        if (number === 1) {
            return 'Hearts';
        } else if (number === 2) {
            return 'Clubs';
        }else if(number === 3) {
            return 'Spades';
        }else if(number === 4) {
            return 'Diamonds';
        }
    }

    const convertIcon = () => {
        let icon = `${randomIcon()}`
        if(icon === 'Hearts') return `${hearts}`;
        if(icon === 'Clubs') return `${clubs}`;
        if(icon === 'Spades') return `${spades}`;
        if(icon === 'Diamonds') return `${diamonds}`;
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
        for (let i = 0; i < parseInt(numOfCards); i++) {
            setNumbersDisplayed(current => [...current, `${possibleNumbers[randomNumberIdx()]}`]);
            setIconsDisplayed(current => [...current, `${convertIcon()}`]);
            console.log("Setting up numbers...");
        }
    }, [Card])

    //useEffect(() => {
    //    shuffleArray(numbersDisplayed);
    //}, [numbersDisplayed]);




    return (
        <div className="full-cards-container">
            <Card
                index={index}
                numbersDisplayed={numbersDisplayed}
                setNumbersDisplayed={setNumbersDisplayed}
                iconsDisplayed={iconsDisplayed}
                setIconsDisplayed={setIconsDisplayed}
                shuffleArray={shuffleArray}

            /> 
            <Card
                index={index + 1}
                numbersDisplayed={numbersDisplayed}
                setNumbersDisplayed={setNumbersDisplayed}
                iconsDisplayed={iconsDisplayed}
                setIconsDisplayed={setIconsDisplayed}
                shuffleArray={shuffleArray}
            />
            <Card
                index={index + 2}
                numbersDisplayed={numbersDisplayed}
                setNumbersDisplayed={setNumbersDisplayed}
                iconsDisplayed={iconsDisplayed}
                setIconsDisplayed={setIconsDisplayed}
                shuffleArray={shuffleArray}
            />
        </div>
    );
}

export default Level1;