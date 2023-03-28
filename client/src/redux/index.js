import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const authActions = authSlice.actions;

export const store = configureStore({ reducer: authSlice.reducer });

export default authActions;
