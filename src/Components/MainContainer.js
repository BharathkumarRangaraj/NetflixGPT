import React from "react";
import Videobackground from "./Videobackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowplayingmovies);
  console.log(movies, "hello");
  if (!movies) return;

  const mainmovie = movies[0];
  const { title, overview } = mainmovie;
  console.log(mainmovie);

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <Videobackground />
    </div>
  );
};

export default MainContainer;
