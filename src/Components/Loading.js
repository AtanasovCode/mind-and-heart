import React, { useEffect, useState } from 'react';
import Card from './Card';
import hearts from '../Assets/Images/card-components/hearts.png';
import spades from '../Assets/Images/card-components/spades.png';
import clubs from '../Assets/Images/card-components/clubs.png';
import diamonds from '../Assets/Images/card-components/diamonds.png';
import '../Styles/cards.css';


const Loading = () => {

    const [possibleNumbers, setPossibleNumbers] = useState([
        'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
    ]);

    const [numbers, setNumbers] = useState([]);
    const [icons, setIcons] = useState([]); 

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

    const onCardClick = () => {
        console.log("");
    }

    useEffect(() => {
        for(let i = 0; i < 4; i++) {
            setNumbers(
                current => [
                    ...current,
                    `${possibleNumbers[
                    Math.floor(Math.random() * possibleNumbers.length)
                    ]}`
                ]
            );
            setIcons(
                current => [
                    ...current,
                    `${convertIcon()}`
                ]
            )
        }
    }, [])


    return (
        <div>
            <Card
                numbersDisplayed={numbers}
                iconsDisplayed={icons}
                onCardClick={onCardClick}
                index={0}
            />
             <Card
                numbersDisplayed={numbers}
                iconsDisplayed={icons}
                onCardClick={onCardClick}
                index={1}
            />
             <Card
                numbersDisplayed={numbers}
                iconsDisplayed={icons}
                onCardClick={onCardClick}
                index={2}
            />
             <Card
                numbersDisplayed={numbers}
                iconsDisplayed={icons}
                onCardClick={onCardClick}
                index={3}
            />
            <div>
                <h1>Hello</h1>
            </div>
        </div>
    );
}


export default Loading;
