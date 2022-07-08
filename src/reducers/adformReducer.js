import { createSlice } from "@reduxjs/toolkit";

const initialState=false;

export const adformSlice=createSlice({
    name:'adform',
    initialState:{value:initialState},
    reducers:{
        toggleAdForm:(state,action)=>{
            state.value=action.payload;
        } 
    }
})

export const {toggleAdForm}=adformSlice.actions;

export default adformSlice.reducer;