import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: [],
    trailer: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addtrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});
export const { addnowplayingmovies, addtrailer } = movieSlice.actions;
export default movieSlice.reducer;
