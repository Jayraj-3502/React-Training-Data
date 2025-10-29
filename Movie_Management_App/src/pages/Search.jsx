import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchMovies } from "../feature/movies";
import { Loader, MovieCard } from "./export";

export default function Search() {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { searchMovies, searchPageCount } = useSelector((state) => state.movie);
  const { userExist } = useSelector((state) => state.user);

  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    dispatch(getSearchMovies({ keyword: keyword, page: pageCount }));
    console.log(searchMovies, pageCount);
  }, [keyword, pageCount]);

  useEffect(() => {
    setPageCount(1);
  }, [keyword]);

  return (
    <div>
      <div>This is search page</div>
      <div>
        {searchMovies.lenght === 0 ? (
          <Loader />
        ) : (
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            {searchMovies.map((movie) => {
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
        )}
      </div>
      <div>
        <div className="flex flex-row gap-4 justify-center py-3 items-center">
          <PageChangeButton
            text="Prev"
            on_click_logic={() => {
              setPageCount((prev) => prev - 1);
            }}
            disable_logic={() => pageCount === 1}
          />
          <div className="text-2xl font-bold text-black dark:text-white">
            {pageCount}
          </div>
          <PageChangeButton
            text="Next"
            on_click_logic={() => {
              setPageCount((prev) => prev + 1);
            }}
            disable_logic={() => pageCount === searchPageCount}
          />
        </div>
      </div>
    </div>
  );
}

function PageChangeButton({
  text = "",
  on_click_logic = () => {},
  disable_logic = () => false,
}) {
  return (
    <button
      className="px-5 py-1.5 pb-2 bg-gray-300 dark:bg-gray-800 rounded-full text-2xl font-bold cursor-pointer disabled:cursor-not-allowed disabled:bg-transparent text-black dark:text-white disabled:border disableed:dark:border-none "
      disabled={disable_logic()}
      onClick={() => {
        on_click_logic();
      }}
    >
      {text}
    </button>
  );
}
