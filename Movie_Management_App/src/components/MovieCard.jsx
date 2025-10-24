import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";

export default function MovieCard({
  imageURL = "",
  ratting = "0.0",
  movieName = "",
  movieId = "",
}) {
  return (
    <div className="min-w-fit w-[200px] max-w-[200px] rounded-full">
      {/* This is book mark icon code */}
      <div>
        <CiBookmarkPlus className="text-4xl p-0 absolute bg-[#000000aa] cursor-pointer" />
      </div>

      {/* This is poster of the movie  */}
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
          alt="This is a Poster"
          className="w-[200px] rounded-tr-md"
        />
      </div>

      {/* This code contains the lower body of the card  */}
      <div className="bg-[#1a1a1a] px-3 py-2 w-[200px] flex flex-col gap-2 rounded-b-md">
        {/* This code is for ratting  */}
        <div className="flex flex-row gap-2 items-center">
          <span>
            <FaStar className="text-yellow-400" />
          </span>
          <span>6.8</span>
        </div>
        {/* This is movie Name */}
        <div>Mashle: Magic and Muscles</div>

        {/* This is buttons for faviroute and more info  */}
        <div className="flex flex-row gap-2 justify-center">
          <button className="flex flex-row gap-2 justify-center items-center px-3 pt-3 pb-2 rounded-full bg-black cursor-pointer">
            <FaHeart className="text-2xl text-red-500" />
          </button>
          <Link className="flex flex-row gap-2 justify-center items-center px-3 pt-3 pb-2 rounded-full bg-black cursor-pointer">
            <IoIosInformationCircle className="text-2xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
