import { useDispatch } from "react-redux";
import { addtopratedmovies } from "../utils/MovieSlice";
import { API_optIons } from "../utils/const";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //fetching data from TMDB nowplayng api and update store
    getApI();
  });
  async function getApI() {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_optIons
    );
    const json = await data.json();
    console.log(json.results, "top rated");

    dispatch(addtopratedmovies(json.results));
  }
};

export default useTopRatedMovies;
