import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const locafilSlice = createSlice({
  name: "locafil",
  initialState: { value: initialStateValue },
  reducers: {
    locationFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { locationFilter } = locafilSlice.actions;

export default locafilSlice.reducer;
