import { useDispatch } from "react-redux";
import { API_optIons } from "../utils/const";
import { addnowplayingmovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //fetching data from TMDB nowplayng api and update store
    getApI();
  });
  async function getApI() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_optIons
    );
    const json = await data.json();
    console.log(json.results, "json movsnowj");

    dispatch(addnowplayingmovies(json.results));
  }
};

export default useNowplayingMovies;
