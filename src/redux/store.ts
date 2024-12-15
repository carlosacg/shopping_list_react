// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './slices/shoppingSlice';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
