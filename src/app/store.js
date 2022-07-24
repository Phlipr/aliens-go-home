import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import messageReducer from '../features/message/messageSlice';
import positionReducer from '../features/position/positionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    message: messageReducer,
    position: positionReducer
  },
});
