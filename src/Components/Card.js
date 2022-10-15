import React, { useEffect, useState } from 'react';
import '../Styles/cards.css';

const Card = ({
    index, 
    numbersDisplayed,
    setNumbersDisplayed,
    shuffleArray,
}) => {


    const onCardClick = () => {
        //console.log(numbersDisplayed);
        setNumbersDisplayed([...shuffleArray(numbersDisplayed)]);
    }

    return (
        <div className="card-container" onClick={onCardClick}>
            <div className="card-number">
                {numbersDisplayed[index]}
            </div>
        </div>
    );
}

export default Card;