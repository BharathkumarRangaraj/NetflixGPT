import React, { useEffect } from "react";
import { API_optIons } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../utils/MovieSlice";

const Videobackground = ({ movied }) => {
  console.log(movied, "mvd");
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store?.movies?.trailers);
  console.log(trailer, "djfhh");
  const getmovievideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movied + "/videos?language=en-US",
      API_optIons
    );
    const json = await data.json();
    console.log(json, "jsodatafordraler");
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispatch(addtrailer(trailer));
    console.log(trailer, "tralfer");
  };
  useEffect(() => {
    getmovievideos();
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
      ></iframe>
    </div>
  );
};

export default Videobackground;
