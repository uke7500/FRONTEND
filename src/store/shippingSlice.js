import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    zipCode: "",
    country: "",
    city: "",
    state: "",
    cellPhone: "",
    telephone: "",
    deliveryTime: "Morning",
    shippingType: "",
    email: "",
    orderId: "",
};

// Load from localStorage if available
const savedShipping = localStorage.getItem("shippingData");
const persistedState = savedShipping ? JSON.parse(savedShipping) : initialState;

const shippingSlice = createSlice({
    name: "shipping",
    initialState: persistedState,
    reducers: {
        updateShipping: (state, action) => {
            const updated = { ...state, ...action.payload };
            localStorage.setItem("shippingData", JSON.stringify(updated)); // persist
            return updated;
        },
        clearShipping: () => {
            localStorage.removeItem("shippingData");
            return initialState;
        },
    },
});

export const { updateShipping, clearShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
