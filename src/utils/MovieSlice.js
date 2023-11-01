import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: null,
    trailers: null,
    addpopularplayingmovies: null,
    topratedmovies: null,
    ontheair: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addpopularplayingmovies: (state, action) => {
      state.addpopularplayingmovies = action.payload;
    },
    addtopratedmovies: (state, action) => {
      state.topratedmovies = action.payload;
    },
    addontheairmovies: (state, action) => {
      state.ontheair = action.payload;
    },
    addtrailer: (state, action) => {
      state.trailers = action.payload;
    },
  },
});
export const {
  addnowplayingmovies,
  addtrailer,
  addpopularplayingmovies,
  addtopratedmovies,
  addontheairmovies,
} = movieSlice.actions;
export default movieSlice.reducer;
