import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UsepopularplayingMovies from "../Hooks/usePopularMovies";

const Browserpage = () => {
  useNowplayingMovies();
  UsepopularplayingMovies();
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
