import { createSlice } from "@reduxjs/toolkit";
import { singUpThunk } from "./auth-thunk";


const initialState={
    login: false,
}
const authSlise = createSlice({
    name:'auch',
    initialState,
extraReducers: builder =>{
    builder
    .addCase(singUpThunk.fulfilled, (state)=>{
        state.login = true;
    })
}
})

export const reducerAuth = authSlise.reducer;