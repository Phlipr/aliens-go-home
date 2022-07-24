import { createSlice } from "@reduxjs/toolkit";

import { moveObjects } from "./moveObjects";

const initialState = {
    angle: 45
};

export const positionSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        moveObject: (state, action) => {
            const mousePosition = action.payload;
            const newAngle = moveObjects(mousePosition);
            state.angle = newAngle ? newAngle : state.angle;
        },
    }
});

export const { moveObject } = positionSlice.actions;

export const selectAngle = state => state.position.angle;

export default positionSlice.reducer;