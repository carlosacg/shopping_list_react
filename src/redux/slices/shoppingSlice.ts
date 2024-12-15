import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';


interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  purchased: boolean;
}

interface ShoppingState {
  items: ShoppingItem[];
  filter: string;
}


// Function for loading the initial state from Local Storage
const loadStateFromLocalStorage = (): ShoppingItem[] => {
  try {
    const serializedState = localStorage.getItem('shoppingItems');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error('Error loading state from Local Storage:', error);
    return [];
  }
};

const initialState: ShoppingState = {
  items: loadStateFromLocalStorage(),
  filter: 'all',
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ShoppingItem>) {
      state.items.push(action.payload);
    },
    editItem(state, action: PayloadAction<ShoppingItem>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    togglePurchased(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.purchased = !item.purchased;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { addItem, editItem, removeItem, togglePurchased, setFilter } = shoppingSlice.actions;
export default shoppingSlice.reducer;
