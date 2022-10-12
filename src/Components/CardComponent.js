import React, { useState, useEffect } from 'react';
import '../Styles/card-component.css';
import heartsIcon from '../Assets/Images/card-components/hearts-icon-large.png';
import clubsIcon from '../Assets/Images/card-components/clubs-icon-large.png';
import spadesIcon from '../Assets/Images/card-components/spades-icon.png';
import diamondsIcon from '../Assets/Images/card-components/diamonds-icon.png';


const CardComponent = ({
    numbersDisplayed,
    setNumbersDisplayed,
    number,
    setNumber,
    numberId,
    icon,
    onCardClick,
    shuffeledArray,
    setShuffeledArray,
}) => {

    const [currentNumber, setCurrentNumber] = useState();
    const convertSymbol = () => {
        let symbol = `${icon}`;
        if (symbol === 'Hearts') return `${heartsIcon}`;
        if (symbol === 'Clubs') return `${clubsIcon}`;
        if (symbol === 'Spades') return `${spadesIcon}`;
        if (symbol === 'Diamonds') return `${diamondsIcon}`;
    }


    useEffect(() => {
        setCurrentNumber(number[numberId])
    }, [CardComponent]);

    useEffect(() => {
        setNumbersDisplayed(current => [...current, `${currentNumber}`]);
    }, [currentNumber])




    //setTheArray(oldArray => [...oldArray, newElement]);
    //setCardsDisplayed(current => [...current, {cardNumber}])


    return (
        <div className="card-container" onClick={onCardClick}>
            <div className="card-number">
                {currentNumber}
            </div>
            <div className="card-symbol-small">
                <img
                    src={`${convertSymbol()}`}
                    className="card-icon-large"
                />
            </div>
            <div className="card-symbol-large">
                <img
                    src={`${convertSymbol()}`}
                    className="card-icon-small"
                />
            </div>
        </div>
    );
}


export default CardComponent; 