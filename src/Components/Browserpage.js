import Header from "./Header";

import useNowplayingMovies from "../Hooks/useNowPlayingMovies";

const Browserpage = () => {
  useNowplayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browserpage;
