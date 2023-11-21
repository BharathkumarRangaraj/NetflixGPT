import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addontheairmovies } from "../utils/MovieSlice";
import { API_optIons } from "../utils/const";

const UseontheairMovies = () => {
  const dispatch = useDispatch();
  const useNowontheair = useSelector((store) => store.movies.ontheair);
  useEffect(() => {
    //fetching data from TMDB nowplayng api and update store
    //meme tech appled below
    !useNowontheair && getApI();
  });
  async function getApI() {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_optIons
    );
    const json = await data.json();

    dispatch(addontheairmovies(json.results));
  }
};

export default UseontheairMovies;
