import React from "react";
import { iMG_CDN_URL } from "../utils/const";

const Moviecard = ({ imgcard }) => {
  return (
    imgcard && (
      <div className="w-36 ml-4 ">
        <img
          className="h-50 w-36"
          alt="movie card"
          src={iMG_CDN_URL + imgcard}
        />
      </div>
    )
  );
};

export default Moviecard;
