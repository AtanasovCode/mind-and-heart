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
    const [cardOrder, setCardOrder] = useState([]);

    const randomNumberIdx = () => {
        return Math.floor(Math.random() * possibleNumbers.length);
    }

    const randomCardIdx = () => {
        return Math.floor(Math.random() * numOfCards);
    }

    const randomIcon = () => {
        const number = Math.floor(Math.random() * 4) + 1;
        if (number === 1) {
            return 'Hearts';
        } else if (number === 2) {
            return 'Clubs';
        } else if (number === 3) {
            return 'Spades';
        } else if (number === 4) {
            return 'Diamonds';
        }
    }

    const convertIcon = () => {
        let icon = `${randomIcon()}`
        if (icon === 'Hearts') return `${hearts}`;
        if (icon === 'Clubs') return `${clubs}`;
        if (icon === 'Spades') return `${spades}`;
        if (icon === 'Diamonds') return `${diamonds}`;
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
            console.log("Setting up cards...");
            setNumbersDisplayed(current => [...current, `${possibleNumbers[randomNumberIdx()]}`]);
            setIconsDisplayed(current => [...current, `${convertIcon()}`]);
            setCardOrder(current => [...current, i]);
        }
    }, [Card])

    const onCardClick = () => {
        console.log("Shuffling...");
        setCardOrder([...shuffleArray(cardOrder)]);
    }



    const cardArr = [
        <Card
            index={index}
            numbersDisplayed={numbersDisplayed}
            iconsDisplayed={iconsDisplayed}
            onCardClick={onCardClick} 
        />,
        <Card
            index={index + 1}
            numbersDisplayed={numbersDisplayed}
            iconsDisplayed={iconsDisplayed}
            onCardClick={onCardClick} 
        />,
        <Card
            index={index + 2}
            numbersDisplayed={numbersDisplayed}
            iconsDisplayed={iconsDisplayed}
            onCardClick={onCardClick} 
        />
    ];


    return (
        <div className="full-cards-container">
            {cardArr[cardOrder[0]]}
            {cardArr[cardOrder[1]]}
            {cardArr[cardOrder[2]]}
        </div>
    );
}

export default Level1;
