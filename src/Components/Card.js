import React, { useEffect, useState } from 'react';
import '../Styles/cards.css';


const Card = ({
    index,
    numbersDisplayed,
    setNumbersDisplayed,
    iconsDisplayed,
    setIconsDisplayed,
    shuffleArray,
}) => {

    const [currentNumber, setCurrentNumber] = useState(numbersDisplayed[index]);
    const [currentIcon, setCurrentIcon] = useState(iconsDisplayed[index])


    const onCardClick = () => {
        //console.log(numbersDisplayed);
        //console.log(iconsDisplayed);
        setNumbersDisplayed([...shuffleArray(numbersDisplayed)]);
        setIconsDisplayed([...shuffleArray(iconsDisplayed)])
    }

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