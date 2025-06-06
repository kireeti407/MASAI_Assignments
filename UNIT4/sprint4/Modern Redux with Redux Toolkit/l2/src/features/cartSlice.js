import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    ADD_ITEM: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
      return state;
    },
    REMOVE_ITEM: (state, action) => {
      const index = state.items.findIndex((e) => e.id === action.payload);
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
      }
      return state;
    },
  },
});

export const { ADD_ITEM, REMOVE_ITEM } = cartSlice.actions;
export default cartSlice.reducer;
