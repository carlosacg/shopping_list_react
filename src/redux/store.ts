import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './slices/shoppingSlice';

// Middleware to synchronize the global status with the Local Storage
const saveStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.shopping.items);
    localStorage.setItem('shoppingItems', serializedState);
  } catch (error) {
    console.error('Error saving state to Local Storage:', error);
  }
};

// Store configuration
export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

// Subscribe changes in the store
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
