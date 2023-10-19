import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-36 px-10">
      <h1 className="font-bold text-6xl ">{title}</h1>
      <p className="text-lg w-1/4 py-4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white w-20 m-4 rounded-lg p-4">
          Play
        </button>
        <button className="bg-gray-500 text-white rounded-lg p-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
