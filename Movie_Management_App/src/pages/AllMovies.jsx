import { useDispatch, useSelector } from "react-redux";
import { Loader, MovieCard } from "./export";
import { useEffect, useState } from "react";
import {
  getGenresDetails,
  getGenresMovies,
  getShortByRatingMovies,
  getShortByYearMovies,
  setGenreId,
} from "../feature/movies";

export default function AllMovies() {
  const dispatch = useDispatch();
  const userExist = useSelector((state) => state.user.userExist);
  const { popularMovies, genreDetails, genreMovies, currentGenreId } =
    useSelector((state) => state.movie);
  const [pageNumber, setPageNumber] = useState(1);
  const [filterType, setFilterType] = useState("genre");

  useEffect(() => {
    dispatch(getGenresDetails());
    dispatch(getGenresMovies({ id: "28", page: 1 }));
    console.log(popularMovies);
    console.log(genreDetails);
  }, [dispatch]);

  function nextPage() {
    setPageNumber((prev) => prev + 1);
    if (filterType === "genre") {
      dispatch(getGenresMovies({ id: currentGenreId, page: pageNumber + 1 }));
    } else if (filterType === "year") {
      dispatch(getShortByYearMovies({ year: "2025", page: pageNumber + 1 }));
    } else if (filterType === "rating") {
      dispatch(getShortByRatingMovies({ page: pageNumber + 1 }));
    } else {
      console.log("No filter selected");
    }
  }

  function prevPage() {
    setPageNumber((prev) => prev - 1);
    if (filterType === "genre") {
      dispatch(getGenresMovies({ id: currentGenreId, page: pageNumber - 1 }));
    } else if (filterType === "year") {
      dispatch(getShortByYearMovies({ year: "2025", page: pageNumber - 1 }));
    } else if (filterType === "rating") {
      dispatch(getShortByRatingMovies({ page: pageNumber - 1 }));
    } else {
      console.log("No filter selected");
    }
  }

  function generChange(movieId) {
    setPageNumber(1);
    setFilterType("gener");
    dispatch(setGenreId(movieId));
    dispatch(getGenresMovies({ id: movieId, page: 1 }));
  }

  function onFilterChange(value) {
    setFilterType(value);
    if (value === "genre") {
      generChange(currentGenreId);
    } else if (value === "year") {
      setPageNumber(1);
      console.log("This is year filter");
      dispatch(getShortByYearMovies({ year: "2025", page: 1 }));
    } else if (value === "rating") {
      setPageNumber(1);
      console.log("This is rating filter");
      dispatch(getShortByRatingMovies({ page: 1 }));
    }
  }

  return (
    <div className="mt-10">
      <div>
        <h2 className="text-5xl font-bold mb-10 text-black dark:text-white">
          Looking For Movies{" "}
          {!userExist ? (
            <span className="text-2xl font-medium">
              (Login to use full features)
            </span>
          ) : (
            ""
          )}
        </h2>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-2 w-[20%]">
          {!genreDetails
            ? console.log(genreDetails)
            : genreDetails.map((genre) => (
                <button
                  className="bg-[#1a1a1a] px-5 py-1.5 pb-2 rounded-full hover:bg-gray-800 w-full"
                  key={genre.id}
                  onClick={() => {
                    generChange(genre.id);
                  }}
                >
                  {genre.name}
                </button>
              ))}
        </div>
        <div>
          <div className="mb-5">
            <select
              name="sortby"
              className="bg-[#1a1a1a] hover:bg-gray-800 text-white px-3 py-1.5 pb-2 rounded-full"
              onChange={(event) => {
                onFilterChange(event.target.value);
              }}
            >
              <option value="genre">Genre</option>
              <option value="year">Year</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {genreMovies.length > 0 ? (
            <div>
              <div className="flex flex-row gap-2 flex-wrap justify-center">
                {genreMovies.map((movie) => {
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
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
