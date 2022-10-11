import React, { useState, useEffect } from 'react';
import '../Styles/card-component.css';
import heartsIcon from  '../Assets/Images/card-components/hearts-icon-large.png';
import clubsIcon from '../Assets/Images/card-components/clubs-icon-large.png';
import spadesIcon from '../Assets/Images/card-components/spades-icon.png';
import diamondsIcon from '../Assets/Images/card-components/diamonds-icon.png';


const CardComponent = ({ cardsDisplayed, setCardsDisplayed }) => {

    const randomNumber = () => {
        const number = Math.floor(Math.random() * 13) + 1;
        if (number <= 10) {
            return number;
        } else {
            if (number === 13) {
                return "K";
            } else if (number === 12) {
                return "Q";
            } else {
                return "J";
            }
        }
    }

    const randomSymbol = () => {
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

    const convertSymbol = () => {
        let symbol = `${randomSymbol()}`
        if(symbol === 'Hearts') return `${heartsIcon}`;
        if(symbol === 'Clubs') return `${clubsIcon}`;
        if(symbol === 'Spades') return `${spadesIcon}`;
        if(symbol === 'Diamonds') return `${diamondsIcon}`;
    }

    const [cardSymbol, setCardSymbol] = useState(`${convertSymbol()}`);
    const [cardNumber, setCardNumber] = useState(`${randomNumber()}`)

    //setTheArray(oldArray => [...oldArray, newElement]);
    //setCardsDisplayed(current => [...current, {cardNumber}])
    
    const onCardClick = () => {
        setCardSymbol(`${convertSymbol()}`);
        setCardNumber(`${randomNumber()}`);
        setCardsDisplayed(current => [...current, {cardNumber}]);
        console.log(cardsDisplayed);
    }

    return (
        <div className="card-container" onClick={onCardClick}>
            <div className="card-number">
                {cardNumber}
            </div>
            <div className="card-symbol-small">
                <img
                    src={cardSymbol}
                    className="card-icon-large"
                />
            </div>
            <div className="card-symbol-large">
                <img
                    src={cardSymbol}
                    className="card-icon-small"
                />
            </div>
        </div>
    );
}


export default CardComponent; 