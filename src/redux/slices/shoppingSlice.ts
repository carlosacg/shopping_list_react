import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

const initialState: ShoppingState = {
  items: [],
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