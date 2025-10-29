import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../feature/movies";
import { FaHeart, FaStar } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { addFavoritesList, addWatchList } from "../feature/users";
import { Loader } from "./export";
import { toast } from "react-toastify";

export default function Details() {
  const param = useParams();
  const { movieDetails } = useSelector((state) => state.movie);
  const { userExist } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);

  function watchListUpdater() {
    dispatch(
      addWatchList({
        imageURL: movieDetails.poster_path,
        ratting: movieDetails.vote_average,
        movieName: movieDetails.title,
        movieId: movieDetails.id,
      })
    );
    // console.log(movieDetails);
  }

  function favrouteListUpdater() {
    dispatch(
      addFavoritesList({
        imageURL: movieDetails.poster_path,
        ratting: movieDetails.vote_average,
        movieName: movieDetails.title,
        movieId: movieDetails.id,
      })
    );
  }

  useEffect(() => {
    dispatch(getMovieDetails(param.id));
  }, [dispatch]);

  useEffect(() => {
    setGenres(movieDetails.genres);
  }, [movieDetails]);

  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold mb-10 text-black dark:text-white">
        Movie Details
      </h1>
      {Object.keys(movieDetails).length === 0 ? (
        <Loader />
      ) : (
        <div className="max-w-[900px] mx-auto flex flex-col gap-5 p-5 rounded-xl bg-gray-100 text-black dark:bg-[#1a1a1a] dark:text-white">
          {/* Top part of card  */}
          <div className="flex flex-row justify-between items-center gap-2">
            <div>
              <div className="mb-3">
                <h3 className="text-2xl md:text-5xl font-bold">
                  {movieDetails.title}
                </h3>
              </div>
              <div className="flex flex-row text-[16px] md:text-xl">
                <span className="pr-2 border-r">
                  {movieDetails.release_date}
                </span>
                <span className="pl-2 border-l">{movieDetails.runtime}m</span>
              </div>
            </div>

            <div className="">
              <div className="text-xl md:text-2xl font-bold">Rating</div>
              <div className="flex flex-row gap-2 items-center">
                <FaStar className="text-yellow-400" />{" "}
                <div>{movieDetails.vote_average}</div>
              </div>
              <div className="text-[12px] md:text-[18px]">
                Total: {movieDetails.vote_count}
              </div>
            </div>
          </div>

          {/* Main pard of card */}
          <div className="md:flex md:flex-row gap-5">
            <div className="min-w-[300px] mb-5 md:mb-0">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-2xl font-bold mb-3">Description:</h4>
                <p className="text-[18px]">{movieDetails.overview}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  className="flex flex-row text-2xl gap-2 items-center justify-center border px-3 py-1.5 rounded-full cursor-pointer disabled:cursor-not-allowed"
                  onClick={() => {
                    watchListUpdater();
                    // toast.success("Item added to Watch Later List");
                  }}
                  disabled={!userExist}
                >
                  <CiBookmarkPlus className="" />
                  <span>Watch List</span>
                </button>
                <button
                  className="flex flex-row text-2xl gap-2 items-center  justify-center border px-3 py-1.5 rounded-full cursor-pointer disabled:cursor-not-allowed"
                  onClick={() => {
                    favrouteListUpdater();
                    // toast.success("Item added to Favroute List");
                  }}
                  disabled={!userExist}
                >
                  <FaHeart className="text-red-500" />
                  <span>Add Favriout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
