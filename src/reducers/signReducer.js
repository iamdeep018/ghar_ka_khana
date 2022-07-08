import { createSlice } from "@reduxjs/toolkit";

const initialState=false;

export const signSlice=createSlice({
    name:'sign',
    initialState:{value:initialState},
    reducers:{
        toggleSign:(state,action)=>{
            state.value=action.payload;
        } 
    }
})

export const {toggleSign}=signSlice.actions;

export default signSlice.reducer;