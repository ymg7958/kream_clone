import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../assets/cartitems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      console.log(itemId);
    },
  },
});

export const { removeItem } = cartSlice.actions;
export default cartSlice.reducer;
