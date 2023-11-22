import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesdata = useSelector((store) => store?.movies);

  return (
    moviesdata.nowplayingmovies && (
      <div className=" bg-black w-screen">
        <div className=" mt-0 md:-mt-52 relative z-20 px-4">
          <MovieList
            title={"Now Playing"}
            movies={moviesdata?.nowplayingmovies}
          />
          <MovieList
            title={"Popular"}
            movies={moviesdata?.addpopularplayingmovies}
          />
          <MovieList title={"Top Rated"} movies={moviesdata?.topratedmovies} />
          <MovieList title={"on the air"} movies={moviesdata?.ontheair} />
          <MovieList
            title={"Rated Movies"}
            movies={moviesdata?.nowplayingmovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
