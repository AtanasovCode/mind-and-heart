import '../Styles/game-failed.css';

const GameFailed = ({
    level,
    setLevel,
}) => {

    const onButtonClick = () => {
        setLevel(level + 1);
        console.log("Click");
    }

    return (
        <div className="game-fail-container">
            <div>
                <h1>Game Over</h1>
            </div>
            <div>
                <span>You Clicked The Same Card Twice</span>
            </div>
            <div>
                <input 
                    type="button"
                    value="Play Again"
                    onClick={onButtonClick}
                />
            </div>
        </div>
    );
}

export default GameFailed;