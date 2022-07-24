import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: `It's easy to integrate React and Redux, isn't it?`
};

export const messageSlice = createSlice({
    name: 'message',
    initialState
});

export const selectMessage = state => state.message.message;

export default messageSlice.reducer;