import React, { useState, useEffect } from 'react';
import '../Styles/card-component.css';
import heartsIcon from '../Assets/Images/card-components/hearts-icon-large.png';
import clubsIcon from '../Assets/Images/card-components/clubs-icon-large.png';
import spadesIcon from '../Assets/Images/card-components/spades-icon.png';
import diamondsIcon from '../Assets/Images/card-components/diamonds-icon.png';


const CardComponent = ({
    numbersDisplayed,
    setNumbersDisplayed,
    numberToDisplay,
    possibleNumbers,
    shuffledNumbers,
    setShuffeldNumbers,
    getShuffledCards,
    numberId,
    removeUndefined,
    shuffleArray,
    icon,
    onCardClick,
}) => {

    const [currentNumber, setCurrentNumber] = useState();
    const [currentIcon, setCurrentIcon] = useState();

    const convertIcon = () => {
        let randomIcon = `${icon}`;
        if (randomIcon === 'Hearts') return `${heartsIcon}`;
        if (randomIcon === 'Clubs') return `${clubsIcon}`;
        if (randomIcon === 'Spades') return `${spadesIcon}`;
        if (randomIcon === 'Diamonds') return `${diamondsIcon}`;
    }

    useEffect(() => {
        setCurrentNumber(possibleNumbers[numberId]);
        setCurrentIcon(convertIcon());
        console.log("Card Component Loaded");
    }, [CardComponent])

    useEffect(() => {
        setNumbersDisplayed(current => [...current, `${currentNumber}`]);
        console.log(`currentNumber Updated: ${currentNumber}`);
    }, [currentNumber]);


    useEffect(() => {
        document.querySelector(".card-container").addEventListener("click", onCardClick);
        return () => {
            document.querySelector(".card-container").removeEventListener("click", onCardClick);
        }
    }, [onCardClick])

    //setTheArray(oldArray => [...oldArray, newElement]);
    //setCardsDisplayed(current => [...current, {cardNumber}])


    return (
        <div className="card-container" onClick={onCardClick}>
            <div className="card-number">
                {currentNumber}
            </div>
            <div className="card-randomIcon-small">
                <img
                    src={`${currentIcon}`}
                    className="card-icon-large"
                />
            </div>
            <div className="card-randomIcon-large">
                <img
                    src={`${currentIcon}`}
                    className="card-icon-small"
                />
            </div>
        </div>
    );
}


export default CardComponent; 