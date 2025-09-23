import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import shippingSlice from "./shippingSlice";
import deliverySlice from "./deliverySlice";

const appStore = configureStore({
  reducer: {
   user: userSlice,
   product: productSlice,
   shipping: shippingSlice,
   delivery: deliverySlice,
  },
});

export default appStore;
