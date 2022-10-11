import '../Styles/game-component.css';
import React, { useState } from 'react';
import CardComponent from './CardComponent';

const GameComponent = ({ cardsDisplayed, setCardsDisplayed }) => {


    return (
        <div className="full-game-container">
            <CardComponent
                cardsDisplayed={cardsDisplayed}
                setCardsDisplayed={setCardsDisplayed}
             />
            <CardComponent
                cardsDisplayed={cardsDisplayed}
                setCardsDisplayed={setCardsDisplayed}
             />
             <CardComponent
                cardsDisplayed={cardsDisplayed}
                setCardsDisplayed={setCardsDisplayed}
             />
             <CardComponent
                cardsDisplayed={cardsDisplayed}
                setCardsDisplayed={setCardsDisplayed}
             />
        </div>
    );
}


export default GameComponent;