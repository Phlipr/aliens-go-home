import React from "react";
import PropTypes from 'prop-types';
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import CannonBall from "./Cannonball";
import CurrentScore from "./CurrentScore";
import FlyingObject from "./FlyingObject";
import Heart from "./Heart";
import StartGame from "./StartGame";
import Title from "./Title";

const Canvas = (props) => {
    const gameHeight = 1200;
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    const { angle, trackMouse } = props;

    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
            onMouseMove={trackMouse}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <Sky />
            <Ground />
            <CannonPipe rotation={angle} />
            <CannonBase />
            <CannonBall position={{ x: 0, y: -100 }} />
            <CurrentScore score={15} />

            {!props.gameState.started &&
                <g>
                    <StartGame onClick={() => props.startGame()} />
                    <Title />
                </g>
            }

            {props.gameState.started &&
                <g>
                    {props.gameState.flyingObjects.map(flyingObject => (
                        <FlyingObject
                            key={flyingObject.id}
                            position={flyingObject.position}
                        />
                    ))}
                </g>
            }
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default Canvas;