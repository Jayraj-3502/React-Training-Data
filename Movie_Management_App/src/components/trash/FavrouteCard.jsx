// import { Link } from "react-router-dom";
// import { FaHeart, FaStar } from "react-icons/fa";
// import { CiBookmarkPlus } from "react-icons/ci";
// import { IoIosInformationCircle } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import {
//   addFavoritesList,
//   addWatchList,
//   removeFavrouteList,
// } from "../feature/users";
// import { useEffect } from "react";

// export default function FavrouteCard({
//   imageURL = "",
//   ratting = "0.0",
//   movieName = "",
//   movieId = "",
// }) {
//   const dispatch = useDispatch();

//   function removeFromFavroute() {
//     dispatch(removeFavrouteList(movieId));
//   }

//   useEffect(() => {}, [dispatch]);

//   return (
//     <div className="min-w-fit w-[200px] max-w-[200px] rounded-full">
//       {/* This is poster of the movie  */}
//       <div>
//         <img
//           src={`https://image.tmdb.org/t/p/w200/${imageURL}`}
//           alt="This is a Poster"
//           className="w-[200px] h-[300px] rounded-tr-md"
//         />
//       </div>

//       {/* This code contains the lower body of the card  */}
//       <div className="bg-[#1a1a1a] px-3 py-2 w-[200px] flex flex-col gap-2 rounded-b-md h-full">
//         {/* This code is for ratting  */}
//         <div className="flex flex-row gap-2 items-center">
//           <span>
//             <FaStar className="text-yellow-400" />
//           </span>
//           <span>{ratting}</span>
//         </div>
//         {/* This is movie Name */}
//         <div>
//           {movieName.length >= 20 ? `${movieName.slice(0, 20)}...` : movieName}
//         </div>

//         {/* This is buttons for faviroute and more info  */}
//         <div className="flex flex-row gap-2 justify-center">
//           <button
//             className="flex flex-row gap-2 justify-center items-center px-5 pt-2 pb-2 rounded-full font-bold bg-red-500 cursor-pointer"
//             onClick={() => {
//               removeFromFavroute();
//             }}
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
