import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: null,
    trailers: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addtrailer: (state, action) => {
      state.trailers = action.payload;
    },
  },
});
export const { addnowplayingmovies, addtrailer } = movieSlice.actions;
export default movieSlice.reducer;
