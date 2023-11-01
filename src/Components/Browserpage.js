import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UsepopularplayingMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import UseontheairMovies from "../Hooks/useontheairMoves";

const Browserpage = () => {
  useNowplayingMovies();
  UsepopularplayingMovies();
  useTopRatedMovies();
  UseontheairMovies();
  return (
    <div>
      {/*
      -maincontainer
       -background video
       -video title
       -play/pause/sub section

      -secondary:
       -movie lists
       -movie cards


      */}
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browserpage;
