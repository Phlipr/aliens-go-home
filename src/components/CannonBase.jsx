import React from "react";

import { pathFromBezierCurve } from "../utils/formulas";

const CannonBase = (props) => {
    const cannonBaseBaseStyle = {
        fill: '#a16012',
        stroke: '#75450e',
        strokeWidth: '2px',
    };

    const baseWidth = 80;
    const halfBase = 40;
    const height = 60;
    const negativeHeight = height * -1;

    const cubicBezierCurve = {
        initialAxis: {
            x: -halfBase,
            y: height,
        },
        initialControlPoint: {
            x: 20,
            y: negativeHeight
        },
        endingControlPoint: {
            x: 60,
            y: negativeHeight
        },
        endingAxis: {
            x: baseWidth,
            y: 0
        },
    };

    return (
        <g>
            <path
                style={cannonBaseBaseStyle}
                d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
                x1={-halfBase}
                y1={height}
                x2={halfBase}
                y2={height}
                style={cannonBaseBaseStyle}
            />
        </g>
    );
};

export default CannonBase;