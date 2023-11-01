import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieSlice from "./MovieSlice";
import Gptslice from "./Gptslice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: MovieSlice,
    gpt: Gptslice,
  },
});

export default appStore;
