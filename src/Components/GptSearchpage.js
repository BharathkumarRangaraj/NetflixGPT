import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptsearchresults from "./Gptsearchresults";
import { BG_url } from "../utils/const";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover md:w-screen"
          alt="logn-bg-mg"
          src={BG_url}
        />
      </div>
      <div className="pt-[24%] md:pt-[0%]">
        <Gptsearchbar />
        <Gptsearchresults />
      </div>
    </>
  );
};

export default GptSearchPage;
