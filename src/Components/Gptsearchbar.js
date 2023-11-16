import React, { useRef } from "react";
import lang from "./languageconstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_optIons } from "../utils/const";
import { addgptmovies } from "../utils/Gptslice";

const Gptsearchbar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const gptsearchresult = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_optIons
    );

    const json = await data.json();
    return json.results;
  };

  const handlegptsearch = async () => {
    console.log(gptsearchresult.current.value);
    const gptQuery =
      "act as a movie recommendation system and suggest movies for the query : " +
      gptsearchresult.current.value +
      "only give me names of five movies, comma seperated like the example result given ahead. example:don,jailer,beast,24,leo";

    const chatgptresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!chatgptresults.choices) {
      //error handlg
    }
    const GptMovies = chatgptresults?.choices?.[0]?.message?.content.split(",");
    const promiseArray = GptMovies.map((movie) => searchMovieTMDB(movie));
    const TMDBresults = await Promise.all(promiseArray);
    dispatch(addgptmovies(TMDBresults));
    console.log(TMDBresults, "tmdbresults");
  };
  return (
    <div className="pt-[10%] pl-[30%]  ">
      <form
        className="bg-black p-2 m-2 w-1/2 grid grid-cols-12 font-bold rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9"
          type="text"
          placeholder={lang[langkey].gptsearchplaceholder}
          ref={gptsearchresult}
        />
        <button
          onClick={handlegptsearch}
          className="bg-red-700 col-span-3  m-[10px] text-white rounded-lg pl-2"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
