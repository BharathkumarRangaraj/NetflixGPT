import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Gptsearchresults = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  console.log(movieNames, movieResults, "data of gpts");
  if (!movieNames) return null;
  return (
    <div className="m-4 p-4 bg-opacity-80 bg-black text-white">
      <div>
        {movieNames.map((Movies, i) => (
          <MovieList key={Movies} title={Movies} movies={movieResults[i]} />
        ))}
      </div>
    </div>
  );
};

export default Gptsearchresults;
