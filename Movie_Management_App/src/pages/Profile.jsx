import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./export";
import { useEffect } from "react";
import WatchLaterCard from "../components/WatchLaterCard";
import FavrouteCard from "../components/FavrouteCard";

export default function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userExist = useSelector((state) => state.user.userExist);

  useEffect(() => {}, [currentUser]);

  return (
    <div className="pt-10 flex flex-col items-center">
      {!userExist ? (
        <div className="text-5xl font-bold text-center flex flex-col gap-5">
          <div>User Not Logged In!</div>
          <div>Please login first.</div>
        </div>
      ) : (
        <div className="w-full">
          <div className="text-3xl mb-10">
            Hello{" "}
            <span className="text-5xl font-bold">{currentUser.userName}</span>
          </div>
          <div className="mb-10">
            <div className="mb-10">
              <h4 className="text-4xl font-bold">Watch Later List</h4>
            </div>
            <div className="flex flex-row gap-1 overflow-y-hidden no-scrollbar">
              {currentUser.watch_later.map((item) => {
                const { imageURL, movieName, ratting, movieId } = item;
                return (
                  <WatchLaterCard
                    key={movieId}
                    imageURL={imageURL}
                    movieName={movieName}
                    ratting={ratting}
                    movieId={movieId}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-10">
              <h4 className="text-4xl font-bold">Favroute List</h4>
            </div>
            <div className="flex flex-row gap-1 overflow-y-hidden no-scrollbar">
              {currentUser.favirout_list.map((item) => {
                const { imageURL, movieName, ratting, movieId } = item;
                return (
                  <FavrouteCard
                    key={movieId}
                    imageURL={imageURL}
                    movieName={movieName}
                    ratting={ratting}
                    movieId={movieId}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
