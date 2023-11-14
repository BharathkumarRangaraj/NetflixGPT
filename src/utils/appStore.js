import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieSlice from "./MovieSlice";
import Gptslice from "./Gptslice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: MovieSlice,
    gpt: Gptslice,
    config: configSlice,
  },
});

export default appStore;
