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
          <button
            className="px-5 py-1.5 pb-2 bg-gray-800 rounded-full text-2xl font-bold cursor-pointer disabled:cursor-not-allowed disabled:bg-transparent"
            disabled={pageCount === 1 ? true : false}
            onClick={() => {
              setPageCount((prev) => prev - 1);
            }}
          >
            Prev
          </button>
          <div className="text-2xl font-bold">{pageCount}</div>
          <button
            className="px-5 py-1.5 pb-2 bg-gray-800 rounded-full text-2xl font-bold cursor-pointer disabled:cursor-not-allowed disabled:bg-transparent"
            onClick={() => {
              setPageCount((prev) => prev + 1);
            }}
            disabled={pageCount === searchPageCount ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
