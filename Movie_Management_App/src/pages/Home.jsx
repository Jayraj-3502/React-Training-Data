import { useDispatch, useSelector } from "react-redux";
import { Loader, MovieCard } from "./export";
import { useEffect } from "react";
import {
  getDiscoverMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../feature/movies";

export default function Home() {
  const dispatch = useDispatch();
  const userExist = useSelector((state) => state.user.userExist);
  const { popularMovies, topRatedMovies, discoverMovies, trendingMovies } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getPopularMovies("1"));
    dispatch(getTopRatedMovies());
    dispatch(getDiscoverMovies());
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
    <>
      <div></div>
      {/* Popular Movies section  */}
      <div className="mt-10">
        <div>
          <TitleText text="Popular Movies" />
        </div>
        <div>{MovieDataLogic(popularMovies, userExist)}</div>
      </div>

      {/* Top Rated Movies section  */}
      <div className="mt-10">
        <div>
          <TitleText text="Top Rated Movies" />
        </div>
        <div>{MovieDataLogic(topRatedMovies, userExist)}</div>
      </div>

      {/* Discover Movies section  */}
      <div className="mt-10">
        <div>
          <TitleText text="Discover Movies" />
        </div>
        <div>{MovieDataLogic(discoverMovies, userExist)}</div>
      </div>

      {/* Trending Movies section  */}
      <div className="mt-10">
        <div>
          <TitleText text="Trending Movies" />
        </div>
        <div>{MovieDataLogic(trendingMovies, userExist)}</div>
      </div>
    </>
  );
}

function MovieDataLogic(movieList, userExist = false) {
  return movieList.length > 0 ? (
    <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar">
      {movieList.map((movie) => {
        const { title, id, vote_average, poster_path } = movie;
        return (
          <MovieCard
            key={id}
            movieName={title}
            movieId={id}
            ratting={vote_average}
            imageURL={poster_path}
            userExist={userExist}
          />
        );
      })}
    </div>
  ) : (
    <Loader />
  );
}

function TitleText({ text = "" }) {
  return (
    <h2 className="text-5xl font-bold mb-10 text-black dark:text-white">
      {text}
    </h2>
  );
}
