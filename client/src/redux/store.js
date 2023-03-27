import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./index";

export const Store = configureStore({
    reducer: {
        auth: userSlice
    }
})
