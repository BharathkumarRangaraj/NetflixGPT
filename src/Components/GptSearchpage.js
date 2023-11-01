import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptsearchresults from "./Gptsearchresults";
import { BG_url } from "../utils/const";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img alt="logn-bg-mg" src={BG_url} />
      </div>
      <Gptsearchbar />
      <Gptsearchresults />
    </div>
  );
};

export default GptSearchPage;
