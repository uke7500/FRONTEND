import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data
      ? JSON.parse(data)
      : { productData: [], totalPrice: 0 };  // return object not array
  } catch {
    return { productData: [], totalPrice: 0 };
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        productData: state.productData,
        totalPrice: state.totalPrice,
      })
    );
  } catch { }
};

const initialState = {
  productData: loadFromLocalStorage().productData || [],
  totalPrice: loadFromLocalStorage().totalPrice || 0,
};

const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.productData.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productData.push({ ...product, quantity: 1 });
      }

      state.totalPrice = calculateTotal(state.productData);
      saveToLocalStorage(state);
    },

    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.productData.find((item) => item.id === id);

      if (product) {
        product.quantity = Math.max(1, quantity);
      }

      state.totalPrice = calculateTotal(state.productData);
      saveToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.productData = state.productData.filter((item) => item.id !== id);

      state.totalPrice = calculateTotal(state.productData);
      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.productData = [];
      state.totalPrice = 0;
      saveToLocalStorage(state);
    },
  },
});

export const {
  addProductToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
