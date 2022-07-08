import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const contentSlice = createSlice({
  name: "content",
  initialState: { value: initialStateValue },
  reducers: {
    contentFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { contentFilter } = contentSlice.actions;

export default contentSlice.reducer;
