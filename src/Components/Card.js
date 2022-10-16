import React, { useEffect, useState } from 'react';
import '../Styles/cards.css';


const Card = ({
    index,
    numbersDisplayed,
    iconsDisplayed,
    onCardClick,
    numbersClicked,
    level,
    setLevel,
}) => {

    return (
        <div className="card-container" id={`${index}`} onClick={onCardClick}>
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