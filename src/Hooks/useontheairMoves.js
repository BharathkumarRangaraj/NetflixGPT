import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addontheairmovies } from "../utils/MovieSlice";
import { API_optIons } from "../utils/const";

const UseontheairMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //fetching data from TMDB nowplayng api and update store
    getApI();
  });
  async function getApI() {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_optIons
    );
    const json = await data.json();
    console.log(json.results, "top rated");

    dispatch(addontheairmovies(json.results));
  }
};

export default UseontheairMovies;
