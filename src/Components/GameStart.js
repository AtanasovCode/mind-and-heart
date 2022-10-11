import { ReactSVG } from 'react-svg'
import { ReactComponent as AceClubs } from '../Assets/Images/club-set-black/clubs_ace_black.svg';
import { ReactComponent as QueenClubs } from '../Assets/Images/club-set-black/clubs_queen_black.svg';
import { ReactComponent as FiveClubs } from '../Assets/Images/club-set-black/clubs_5_black.svg';
import { ReactComponent as KingClubs } from '../Assets/Images/club-set-black/clubs_king_black.svg';
import { ReactComponent as FourClubs } from '../Assets/Images/club-set-black/clubs_4_black.svg';
import { ReactComponent as FourHearts } from '../Assets/Images/hearts-set-black/hearts_4_black.svg';
import { ReactComponent as KingHearts } from '../Assets/Images/hearts-set-black/hearts_king_black.svg';
import { ReactComponent as SixHearts } from '../Assets/Images/hearts-set-black/hearts_6_black.svg';
import { ReactComponent as EightHearts } from '../Assets/Images/hearts-set-black/hearts_8_black.svg';
import { ReactComponent as AceHearts } from '../Assets/Images/hearts-set-black/hearts_ace_black.svg';
import '../Styles/game-start.css';


const GameStart = ({ displayGame, setDisplayGame }) => {

    const onBtnPlay = () => {
        setDisplayGame(() => displayGame + 1);
    }

    return (
        <div className="start-game-full-container">
            <div>
                <KingHearts
                    className="king-hearts-icon card-icon"
                />
                <EightHearts
                    className="eight-hearts-icon card-icon"
                />
                <FourHearts
                    className="four-hearts-icon card-icon"
                />
                <SixHearts
                    className="six-hearts-icon card-icon"
                />
                <AceHearts 
                    className="ace-hearts-icon card-icon"
                />
                <AceClubs
                    className="ace-black-icon card-icon"
                />
                <QueenClubs
                    className="queen-black-icon card-icon"
                />
                <FiveClubs
                    className="five-black-icon card-icon"
                />
                <FourClubs
                    className="four-black-icon card-icon"
                />
                <KingClubs 
                    className="king-black-icon card-icon"
                />
            </div>
            <div className="game-start-info-container">
                <div className="game-start-heading">
                    <h1>Mind & <span className="word-heart">Heart</span></h1>
                    <div className="game-start-subtitle">
                        <span>
                            How well do you know your cards?
                        </span>
                    </div>
                </div>
                <div className="game-start-btn-container">
                    <input
                        type="button"
                        className="game-start-btn"
                        value="Start Game"
                        onClick={onBtnPlay}
                    />
                </div>
            </div>
        </div>
    );
}

export default GameStart;