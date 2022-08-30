import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.products.push(tempProduct);
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    removeFromCart(state, action) {
      const nextCartItems = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = nextCartItems;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// 동일한 제품을 여러번 클릭했을 때, 클릭한 아이템이 계속해서 새로 추가되면 안된다는 것. 처음받아온 아이템 내부에서 개수를 늘려가야 함.
