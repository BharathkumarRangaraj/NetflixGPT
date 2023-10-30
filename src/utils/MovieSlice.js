import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: null,
    trailers: null,
    addpopularplayingmovies: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addpopularplayingmovies: (state, action) => {
      state.addpopularplayingmovies = action.payload;
    },
    addtrailer: (state, action) => {
      state.trailers = action.payload;
    },
  },
});
export const { addnowplayingmovies, addtrailer, addpopularplayingmovies } =
  movieSlice.actions;
export default movieSlice.reducer;
