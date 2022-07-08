import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const catefilSlice = createSlice({
  name: "catefil",
  initialState: { value: initialStateValue },
  reducers: {
    categoryFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { categoryFilter } = catefilSlice.actions;

export default catefilSlice.reducer;
