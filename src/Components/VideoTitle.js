import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video py-16 md:py-36 px-4 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text- md md:text-4xl ">{title}</h1>
      <p className="text-md w-1/4 py-4 hidden md:inline-block">{overview}</p>
      <div>
        <button className="bg-white text-black w-20 my-2 md:my-0 m-0 md:m-4 rounded-lg p-[2px] md:p-4 hover:bg-opacity-75">
          PlaY
        </button>
        <button className="bg-gray-500 text-white rounded-lg p-4 bg-opacity-50 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
