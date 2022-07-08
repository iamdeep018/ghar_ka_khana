import { createSlice } from "@reduxjs/toolkit";

const initialState=false;

export const categorySlice=createSlice({
    name:'catedd',
    initialState:{value:initialState},
    reducers:{
        togglecatedd:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {togglecatedd}=categorySlice.actions;

export default categorySlice.reducer;