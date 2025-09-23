import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("deliveryState")) || {
    cartSubTotal: 0,
    discount: 0,
    finalPrice: 0,
    promoCodeStore: "",
};

const deliverySlice = createSlice({
    name: "delivery",
    initialState,
    reducers: {
        addCartData: (state, action) => {
            if (action.payload.cartSubTotal !== undefined) {
                state.cartSubTotal = action.payload.cartSubTotal;
            }
            if (action.payload.discount !== undefined) {
                state.discount = action.payload.discount;
            }
            if (action.payload.finalPrice !== undefined) {
                state.finalPrice = action.payload.finalPrice;
            }

            state.promoCodeStore = action.payload.promoCodeStore;

            // ✅ Save to localStorage every time state updates
            localStorage.setItem("deliveryState", JSON.stringify(state));
        },
        clearPromoData: (state) => {
            state.promoCodeStore = "";
            state.discount = 0;
            const temp_price = state.cartSubTotal - state.discount;
            state.finalPrice = temp_price.toFixed(2);

            localStorage.setItem("deliveryState", JSON.stringify(state));
        }
    },
});

export const { addCartData, clearPromoData } = deliverySlice.actions;
export default deliverySlice.reducer;
