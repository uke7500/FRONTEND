import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isLoggedIn: false, isFetching: true };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      (state.user = null),
        (state.isFetching = true),
        (state.isLoggedIn = false);
    },
    addUserInfo: (state, action) => {
      (state.user = action.payload),
        (state.isFetching = false),
        (state.isLoggedIn = true);
    },
    clearUserInfo: (state) => {
      (state.user = null),
        (state.isFetching = false),
        (state.isLoggedIn = false);
    },
  },
});

export const { addUserInfo, clearUserInfo, setLoading } = userSlice.actions;
export default userSlice.reducer;
