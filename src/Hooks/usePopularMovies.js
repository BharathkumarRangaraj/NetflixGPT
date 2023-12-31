import { useDispatch, useSelector } from "react-redux";
import { API_optIons } from "../utils/const";
import { addpopularplayingmovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const UsepopularplayingMovies = () => {
  const dispatch = useDispatch();
  const useNowontheair = useSelector(
    (store) => store.movies.addpopularplayingmovies
  );
  useEffect(() => {
    //fetching data from TMDB nowplayng api and update store
    !useNowontheair && getApI();
  });
  async function getApI() {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_optIons
    );
    const json = await data.json();

    dispatch(addpopularplayingmovies(json.results));
  }
};

export default UsepopularplayingMovies;
