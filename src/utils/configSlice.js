import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changelanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export default configSlice.reducer;
export const { changelanguage } = configSlice.actions;
