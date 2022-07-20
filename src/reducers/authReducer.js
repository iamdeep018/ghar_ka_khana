 import { createSlice } from "@reduxjs/toolkit";

 const initialState=false;

 export const authSlice=createSlice({
    name:"isAuth",
    initialState:{value:initialState},
    reducers:{
        setIsAuth:(state,actions)=>{
            state.value=actions.payload;
        }
    }
 })

export const {setIsAuth}=authSlice.actions;
 export default authSlice.reducer; 