import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div>
      <h1 className="font-bold text-white text-lg md:text-md ml-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex m-2 ">
          {movies.map((movies) => (
            <div>
              <Moviecard key={movies.id} imgcard={movies.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
