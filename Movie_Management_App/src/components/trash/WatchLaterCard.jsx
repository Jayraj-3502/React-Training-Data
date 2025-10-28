// import { FaStar } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { removeWatchList } from "../../feature/users";

// export default function WatchLaterCard({
//   imageURL = "",
//   ratting = "0.0",
//   movieName = "",
//   movieId = "",
// }) {
//   const dispatch = useDispatch();

//   function removeFromWatchLater(id) {
//     dispatch(removeWatchList(id));
//   }

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
//       <div className="bg-gray-200 dark:bg-[#1a1a1a] text-black dark:text-white px-3 py-2 w-[200px] flex flex-col gap-2 rounded-b-md h-full">
//         {/* This code is for ratting  */}
//         <div className="flex flex-row gap-2 items-center">
//           <FaStar className="text-yellow-400" />
//           <span>{ratting}</span>
//         </div>

//         {/* This is movie Name */}
//         <div>
//           {movieName.length >= 20 ? `${movieName.slice(0, 20)}...` : movieName}
//         </div>

//         {/* This is buttons for faviroute and more info  */}
//         <button
//           className=" px-5 py-1.5 rounded-full text-white font-bold bg-red-500 cursor-pointer"
//           onClick={() => {
//             removeFromWatchLater(movieId);
//           }}
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// }
