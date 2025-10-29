import { useDispatch, useSelector } from "react-redux";
import { Loader, MovieCard } from "./export";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

import {
  getGenresDetails,
  getGenresMovies,
  getShortByRatingMovies,
  getShortByYearMovies,
  setGenreId,
} from "../feature/movies";
import { IoMdMenu } from "react-icons/io";

export default function AllMovies() {
  const dispatch = useDispatch();
  const userExist = useSelector((state) => state.user.userExist);
  const { popularMovies, genreDetails, genreMovies, currentGenreId } =
    useSelector((state) => state.movie);
  const [pageNumber, setPageNumber] = useState(1);
  const [filterType, setFilterType] = useState("genre");
  const [genreMenuVisible, setGenreMenuVisible] = useState(false);

  useEffect(() => {
    dispatch(getGenresDetails());
    dispatch(getGenresMovies({ id: "28", page: 1 }));
    console.log(popularMovies);
    console.log(genreDetails);
  }, [dispatch]);

  function nextPage() {
    console.log(filterType);
    setPageNumber((prev) => prev + 1);
    if (filterType === "genre" || filterType === "gener") {
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
    console.log(filterType);
    setPageNumber((prev) => prev - 1);
    if (filterType === "genre" || filterType === "gener") {
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
    setFilterType("genre");
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
        <h2 className="text-3xl md:text-5xl font-bold mb-5 md:mb-10 text-black dark:text-white">
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
      <div className="flex flex-row gap-5 h-fit">
        <div className="hidden md:flex md:flex-col gap-2 w-[20%] min-w-fit">
          {!genreDetails
            ? console.log(genreDetails)
            : genreDetails.map((genre) => (
                <button
                  className="bg-[#1a1a1a] px-5 py-1.5 pb-2 text-[12px] md:text-[18px] rounded-full hover:bg-gray-800 w-full"
                  key={genre.id}
                  onClick={() => {
                    generChange(genre.id);
                  }}
                >
                  {genre.name}
                </button>
              ))}
        </div>
        <div
          className={`${
            genreMenuVisible ? "flex" : "hidden"
          } flex-col gap-2 w-[20%] min-w-fit absolute bg-white dark:bg-black p-5 rounded-xl border z-50 md:hidden`}
        >
          <div
            className="text-black dark:text-white text-2xl flex justify-end cursor-pointer"
            onClick={() => {
              setGenreMenuVisible(false);
            }}
          >
            <ImCross />
          </div>
          {!genreDetails
            ? console.log(genreDetails)
            : genreDetails.map((genre) => (
                <button
                  className="bg-[#1a1a1a] px-5 py-1.5 pb-2 text-[12px] md:text-[18px] rounded-full hover:bg-gray-800 w-full"
                  key={genre.id}
                  onClick={() => {
                    setGenreMenuVisible(false);
                    generChange(genre.id);
                  }}
                >
                  {genre.name}
                </button>
              ))}
        </div>
        <div>
          <div className="mb-5 flex flex-row gap-3">
            <div
              className={`text-black dark:text-white text-2xl md:hidden cursor-pointer`}
              onClick={() => {
                setGenreMenuVisible((prev) => !prev);
              }}
            >
              <IoMdMenu />
            </div>
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
              <div className="flex flex-row gap-1 md:gap-2 flex-wrap justify-center">
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
                <PageChangeButton
                  text="Prev"
                  on_click_logic={() => prevPage()}
                />
                <div className="px-5 py-1.5 pb-2 text-2xl font-bold bg-gray-800 rounded-full">
                  {pageNumber}
                </div>

                <PageChangeButton
                  text="Next"
                  on_click_logic={() => nextPage()}
                />
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

function PageChangeButton({ text = "", on_click_logic = () => {} }) {
  return (
    <button
      className="px-5 py-1.5 pb-2 bg-gray-300 dark:bg-gray-800 rounded-full text-2xl font-bold cursor-pointer disabled:cursor-not-allowed disabled:bg-transparent text-black dark:text-white disabled:border disableed:dark:border-none "
      onClick={() => {
        on_click_logic();
      }}
    >
      {text}
    </button>
  );
}
