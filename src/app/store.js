import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gameSlice from '../features/game/gameSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    game: gameSlice,
  },
});
