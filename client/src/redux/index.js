import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isloggedIn = true;
    },

    logout(state) {
      state.isloggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
