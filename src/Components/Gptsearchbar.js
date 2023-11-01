import React from "react";

const Gptsearchbar = () => {
  return (
    <div className="pt-[10%] pl-[30%]  ">
      <form className="bg-black p-2 m-2 w-1/2 grid grid-cols-12 font-bold rounded-lg">
        <input
          className="col-span-9"
          type="text"
          placeholder="what do you want to watch today ?"
        />
        <button className="bg-red-700 col-span-3  m-[10px] text-white rounded-lg pl-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
