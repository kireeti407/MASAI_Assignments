
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        existingItem.quantity--;
      }
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    loadCart: (state, action) => {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const { addItem, removeItem, clearCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
