import {configureStore, createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "auth",
    initialState : {isloggedIn: false},
    reducers: {
        login(state) {
            state.isloggedIn = true;
        },

        logout(state){
            state.isloggedIn=false;
        }
    },

});

export const {login,logout} = userSlice.actions;

export const store = configureStore=>({
    
    reducer: userSlice.reducer
});