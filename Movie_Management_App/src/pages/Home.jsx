import { useDispatch, useSelector } from "react-redux";
import { Loader, MovieCard } from "./export";
import { useEffect, useState } from "react";
import { getLatestMovies, getPopularMovies } from "../feature/movies";
import { getCurrentUser } from "../feature/users";

export default function Home() {
  const dispatch = useDispatch();
  const userExist = useSelector((state) => state.user.userExist);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getPopularMovies(pageNumber));
    dispatch(getLatestMovies());
    console.log(popularMovies);
    dispatch(getCurrentUser());
  }, [dispatch]);

  function nextPage() {
    setPageNumber((prev) => prev + 1);
    dispatch(getPopularMovies(pageNumber + 1));
  }

  function prevPage() {
    setPageNumber((prev) => prev - 1);
    dispatch(getPopularMovies(pageNumber - 1));
  }

  return (
    <>
      {/* Popular Movies section  */}
      <div className="mt-10">
        <h2 className="text-5xl font-bold">Look For Movies</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          {popularMovies ? (
            popularMovies.map((movie) => {
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
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>

      <div className="flex flex-row gap-3 justify-center py-3">
        <button
          className="px-5 py-1.5 pb-2 text-2xl font-bold bg-gray-800 rounded-full cursor-pointer disabled:bg-black disabled:cursor-not-allowed"
          onClick={() => {
            prevPage();
          }}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <div className="px-5 py-1.5 pb-2 text-2xl font-bold bg-gray-800 rounded-full">
          {pageNumber}
        </div>
        <button
          className="px-5 py-1.5 pb-2 text-2xl font-bold bg-gray-800 rounded-full cursor-pointer "
          onClick={() => {
            nextPage();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
