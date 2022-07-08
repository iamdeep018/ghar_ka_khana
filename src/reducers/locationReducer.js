import { createSlice } from "@reduxjs/toolkit";

const initialState=false;

export const locationSlice=createSlice({
    name:'locadd',
    initialState:{value:initialState},
    reducers:{
        togglelocadd:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {togglelocadd}=locationSlice.actions;

export default locationSlice.reducer;