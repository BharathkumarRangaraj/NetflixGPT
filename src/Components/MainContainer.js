import React from "react";
import Videobackground from "./Videobackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowplayingmovies);
  console.log(movies, "hello");

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview } = mainMovie;
  const { id } = mainMovie;

  console.log(mainMovie, "mamove");

  return (
    <div className="absolute">
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movied={id} />
      {/* <VideoTitle />
      <Videobackground /> */}
    </div>
  );
};

export default MainContainer;
