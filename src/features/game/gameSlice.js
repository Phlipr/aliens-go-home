import { createSlice } from "@reduxjs/toolkit";

import { moveObjects } from "./moveObjects";
import createFlyingObjects from "./createFlyingObjects";

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date()
};

const initialState = {
    angle: 45,
    gameState: initialGameState
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        moveObject: (state, action) => {
            const mousePosition = action.payload;
            const newAngle = moveObjects(mousePosition);
            state.angle = newAngle ? newAngle : state.angle;
            const { flyingObjects: newFlyingObjects, lastObjectCreatedAt: newLastObjectCreatedAt } = createFlyingObjects(state);
            state.gameState.flyingObjects = newFlyingObjects;
            state.gameState.lastObjectCreatedAt = newLastObjectCreatedAt;
        },
        startGame: (state) => {
            state.gameState.started = true;
        }
    }
});

export const { moveObject, startGame } = gameSlice.actions;

export const selectAngle = state => state.game.angle;
export const selectGameState = state => state.game.gameState;

export default gameSlice.reducer;