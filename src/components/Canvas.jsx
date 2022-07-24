import React from "react";
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
            preserveAspectRatio="xMaxYMax"
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
            <FlyingObject position={{ x: -150, y: -300 }} />
            <FlyingObject position={{ x: 150, y: -300 }} />
            <Heart position={{ x: -300, y: 35 }} />
            <StartGame
                onClick={() => console.log('Aliens, Go Home!')}
            />
            <Title />
        </svg>
    );
};

export default Canvas;