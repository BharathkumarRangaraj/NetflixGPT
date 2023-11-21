import { useDispatch, useSelector } from "react-redux";
import { API_optIons } from "../utils/const";
import { addnowplayingmovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  const useNowplayingMoviess = useSelector(
    (store) => store.movies.nowplayingmovies
  );
  useEffect(() => {
    //fetching data from TMDB nowplayng api and update store
    !useNowplayingMoviess && getApI();
  });
  async function getApI() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_optIons
    );
    const json = await data.json();

    dispatch(addnowplayingmovies(json.results));
  }
};

export default useNowplayingMovies;
