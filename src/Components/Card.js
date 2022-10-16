import React, { useEffect, useState } from 'react';
import '../Styles/cards.css';


const Card = ({
    index,
    numbersDisplayed,
    iconsDisplayed,
    onCardClick,
}) => {
    
    
    //To shuffle the numbers and icons already rendered on the DOM
     //const onCardClick = () => {
        //setNumbersDisplayed([...shuffleArray(numbersDisplayed)]);
        //setIconsDisplayed([...shuffleArray(iconsDisplayed)]);
    //}

    return (
        <div className="card-container" onClick={onCardClick}>
            <div className="card-number">
                {numbersDisplayed[index]}
            </div>
            <div>
                <img
                    src={iconsDisplayed[index]}
                    className="card-icon-small"
                />
            </div>
            <div>
                <img
                    src={iconsDisplayed[index]}
                    className="card-icon-large"
                />
            </div>
        </div>
    );
}

export default Card;