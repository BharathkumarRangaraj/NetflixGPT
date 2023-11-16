import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
  name: "gpt",
  initialState: {
    showgptview: false,
    gptmovies: null,
  },
  reducers: {
    gptsearchview: (state, action) => {
      state.showgptview = !state.showgptview;
    },
    addgptmovies: (state, action) => {
      state.gptmovies = action.payload;
    },
  },
});
export const { gptsearchview, addgptmovies } = Gptslice.actions;
export default Gptslice.reducer;
