import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
  name: "gpt",
  initialState: {
    showgptview: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    gptsearchview: (state, action) => {
      state.showgptview = !state.showgptview;
    },
    addgptmovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { gptsearchview, addgptmovies } = Gptslice.actions;
export default Gptslice.reducer;
