import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartTotalQuantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
// export const { removeItem } = cartSlice.actions;

// Method 0

// addToCart(state, action) {
//   const itemIndex = state.cartItems.findIndex(
//     (item) => item.id === action.payload.id
//   );
//   if (itemIndex >= 0) {
//     state.cartItems[itemIndex].cartTotalAmount += 1;
//   } else {
//     state.cartItems.push(action.payload);
//   }
// },

// Method 1

// removeItem: (state, action) => {
//   const itemId = action.payload;
//   state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
//   console.log(itemId);
// },
