import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CommanCard from "../components/CommanCard";
import {
  removeFavrouteList,
  removeRecentlyViewed,
  removeWatchList,
} from "../feature/users";

export default function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userExist = useSelector((state) => state.user.userExist);

  useEffect(() => {}, [currentUser]);

  return (
    <div className="pt-10 flex flex-col items-center">
      {!userExist ? (
        <div className="text-5xl font-bold text-center flex flex-col gap-5 text-black dark:text-white">
          <div>User Not Logged In!</div>
          <div>Please login first.</div>
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <div className="text-xl md:text-3xl mb-5  md:mb-10 text-black dark:text-white">
            Hello{" "}
            <span className="text-3xl md:text-5xl font-bold">
              {currentUser.userName}
            </span>
          </div>

          <div className="mb-10">
            <CommonHeadingDesign display_text={"Watch Later List"} />
            <CommonLoginFunction
              not_found_text="Dont Have any movies in Watch Later List"
              iterable_array={"watch_later"}
              currentUser={currentUser}
              removefunction={removeWatchList}
            />
          </div>

          <div className="mb-10">
            <CommonHeadingDesign display_text={"Favirout List"} />
            <CommonLoginFunction
              not_found_text="Dont Have any movies in Favroute List"
              iterable_array={"favirout_list"}
              currentUser={currentUser}
              removefunction={removeFavrouteList}
            />
          </div>

          <div>
            <CommonHeadingDesign display_text={"Recently Viewed List"} />
            <CommonLoginFunction
              not_found_text="Dont Have any movies in Recently Viewed List"
              iterable_array="recently_viewed"
              currentUser={currentUser}
              removefunction={removeRecentlyViewed}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function CommonLoginFunction({
  not_found_text = "",
  iterable_array = "",
  currentUser = {},
  removefunction = () => {},
}) {
  console.log(currentUser[iterable_array]);
  return (
    <div className="flex flex-row gap-1 overflow-y-hidden no-scrollbar">
      {!currentUser[iterable_array]
        ? not_found_text
        : currentUser[iterable_array].map((item) => {
            const { imageURL, movieName, ratting, movieId } = item;
            return (
              <CommanCard
                key={movieId}
                imageURL={imageURL}
                movieName={movieName}
                ratting={ratting}
                movieId={movieId}
                removefunction={removefunction}
              />
            );
          })}
    </div>
  );
}

function CommonHeadingDesign({ display_text = "" }) {
  return (
    <div className="mb-5 md:mb-10">
      <h4 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
        {display_text}
      </h4>
    </div>
  );
}
