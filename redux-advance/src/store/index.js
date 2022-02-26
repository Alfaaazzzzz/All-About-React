import { configureStore } from "@reduxjs/toolkit";

import cartToggleSlice from "./cartToggle-slice";
import cartItemSlice from "./cartItem-slice";

const store = configureStore({
  reducer: {
    cartToggle: cartToggleSlice.reducer,
    cartItem: cartItemSlice.reducer,
  },
});

export default store;
