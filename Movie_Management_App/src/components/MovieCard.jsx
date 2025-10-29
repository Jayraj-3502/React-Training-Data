import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  addFavoritesList,
  addRecentlyViewed,
  addWatchList,
} from "../feature/users";
import { useState } from "react";

export default function MovieCard({
  imageURL = "",
  ratting = "0.0",
  movieName = "",
  movieId = "",
  userExist = false,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function watchListUpdater() {
    dispatch(addWatchList({ imageURL, ratting, movieName, movieId }));
  }

  function favrouteListUpdater() {
    dispatch(addFavoritesList({ imageURL, ratting, movieName, movieId }));
  }

  function recentlyViewedUpdater() {
    dispatch(addRecentlyViewed({ imageURL, ratting, movieName, movieId }));
    navigate(`/details/${movieId}`);
  }

  return (
    <div className="min-w-fit w-[150px] md:w-[200px] max-w-[200px] rounded-full h-fit">
      {/* This is book mark icon code */}
      <div className="relative">
        <button
          className="text-4xl p-0 absolute bg-[#ffffffaa] dark:bg-[#000000aa] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            watchListUpdater();
          }}
          disabled={!userExist}
        >
          <CiBookmarkPlus
            className="text-black dark:text-white"
            // onClick
          />
        </button>
      </div>

      {/* This is poster of the movie  */}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${imageURL}`}
          alt="This is a Poster"
          className="w-[150px] h-[250px] md:w-[200px] md:h-[300px] rounded-tr-md"
        />
      </div>

      {/* This code contains the lower body of the card  */}
      <div className="bg-gray-200 dark:bg-[#1a1a1a] text-black dark:text-white px-3 py-2 w-[150px] md:w-[200px] flex flex-col gap-2 rounded-b-md h-full">
        {/* This code is for ratting  */}
        <div className="flex flex-row gap-2 items-center">
          <span>
            <FaStar className="text-yellow-400" />
          </span>
          <span>{ratting}</span>
        </div>
        {/* This is movie Name */}
        <div className="md:hidden">
          {movieName.length >= 10 ? `${movieName.slice(0, 10)}...` : movieName}
        </div>
        <div className="hidden md:block">
          {movieName.length >= 15 ? `${movieName.slice(0, 15)}...` : movieName}
        </div>

        {/* This is buttons for faviroute and more info  */}
        <div className="flex flex-row gap-2 justify-center">
          <button
            className="flex flex-row gap-2 justify-center items-center px-3 pt-3 pb-2 rounded-full bg-white dark:bg-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              favrouteListUpdater();
            }}
            disabled={!userExist}
          >
            <FaHeart className="text-2xl text-red-500" />
          </button>
          <button
            className="flex flex-row gap-2 justify-center items-center px-3 pt-3 pb-2 rounded-full bg-white dark:bg-black cursor-pointer"
            onClick={() => {
              recentlyViewedUpdater();
            }}
          >
            <IoIosInformationCircle className="text-2xl txt-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
