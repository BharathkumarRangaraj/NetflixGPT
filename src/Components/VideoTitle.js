import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video py-36 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl ">{title}</h1>
      <p className="text-md w-1/4 py-4">{overview}</p>
      <div>
        <button className="bg-white text-black w-20 m-4 rounded-lg p-4 hover:bg-opacity-75">
          Play
        </button>
        <button className="bg-gray-500 text-white rounded-lg p-4 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
