import React, { useEffect, useState } from 'react';

const Card = ({
    index, 
    numbersDisplayed,
    shuffledNumbers, 
    setShuffledNumbers,
    shuffleArray,
}) => {

    const [numbersClicked, setNumbersClicked] = useState([]);


    const onCardClick = () => {
        setShuffledNumbers(shuffleArray(numbersDisplayed));
        setNumbersClicked(shuffledNumbers[index])
    }

    useEffect(() => {
        document.querySelector(".card-container").addEventListener("click", onCardClick);

        return () => {
            document.querySelector(".card-container").removeEventListener("click", onCardClick);
        }
    }, [onCardClick])


    return (
        <div className="card-container" onClick={onCardClick}>
            <div className="card-number">
                {shuffledNumbers[index]}
            </div>
        </div>
    );
}

export default Card;