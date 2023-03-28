import { configureStore } from "@reduxjs/toolkit";
import authSlice from './index'

const Store = configureStore({
    reducer: {
        auth: authSlice,
    }
})

export default Store;
