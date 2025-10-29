import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeCurrentUser } from "../../feature/users";
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";
import { setSearchValue } from "../../feature/movies";
import { FaSearch } from "react-icons/fa";
import { toggleDarkMode } from "../../feature/theme";

export default function Navigation({ userExist = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state.theme);
  const [menuVisible, setMenuVisible] = useState(false);
  const { searchValue } = useSelector((state) => state.movie);

  function logoutUser() {
    dispatch(removeCurrentUser());
    navigate("/login");
    setMenuVisible(false);
  }

  function searchSubmit(event) {
    event.preventDefault();
    console.log(searchValue);
    navigate(`/search/${searchValue}`);
  }

  function onThemeSwitch() {
    dispatch(toggleDarkMode());
    const mode = darkMode === true ? "light" : "dark";
    document.getElementsByTagName("html")[0].setAttribute("class", mode);
  }

  return (
    <>
      <nav className="bg-white dark:bg-[#121212] text-black dark:text-white  border rounded-full p-3 text-2xl w-fit gap-10 mx-auto text-[18px] hidden lg:flex lg:flex-row lg:justify-center lg:items-center">
        <div>
          <Link
            to={"/"}
            className="bg-[#f5c518] text-black rounded-full px-5 pt-1.5 pb-2 font-bold"
          >
            MMA
          </Link>
        </div>
        <div>
          <form
            action=""
            onSubmit={(event) => {
              searchSubmit(event);
            }}
            className=" rounded-full outline-none bg-white text-black flex flex-row border dark:border-none"
          >
            <input
              type="text"
              name="search"
              value={searchValue}
              placeholder="Enter Movie Name"
              className="px-5 pt-1.5 pb-2 text-[18px] rounded-full outline-none"
              onChange={(event) => {
                dispatch(setSearchValue(event.target.value));
              }}
              required
            />
            <div className="flex flex-row items-center px-3 py-1.5 bg-[#f5c518]  rounded-r-full">
              <button type="submit">
                <FaSearch className="text-white text-[18px]" />
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex flex-row">
            <Link
              to={"/allmovies"}
              className="px-3 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer"
            >
              Movies
            </Link>
            <Link
              to={"/profile"}
              className="px-3 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer"
            >
              Profile
            </Link>
            <Link
              to={"/login"}
              className="px-3 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer"
              onClick={userExist ? logoutUser : ""}
            >
              {userExist ? "Logout" : "Signin"}
            </Link>
            <div
              className="px-3 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer"
              onClick={() => {
                onThemeSwitch();
              }}
            >
              Theme
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Version  */}
      <nav className="bg-[#121212] flex flex-row justify-between items-center border rounded-full p-3 text-2xl w-full gap-10 mx-auto text-[18px] lg:hidden">
        <div
          onClick={() => {
            setMenuVisible(false);
          }}
        >
          <Link
            to={"/"}
            className="bg-[#f5c518] text-black rounded-full px-5 pt-1.5 pb-2 font-bold"
          >
            MMA
          </Link>
        </div>
        <div
          onClick={() => {
            setMenuVisible((prev) => !prev);
          }}
        >
          <IoMdMenu />
        </div>
        <div
          className={
            menuVisible
              ? "flex flex-col gap-5 absolute top-20 bg-[#121212] p-5 rounded-xl border z-50 w-[90%] left-0 right-0 mx-auto text-center"
              : "hidden"
          }
        >
          <div
            className="absolute right-5"
            onClick={() => {
              setMenuVisible((prev) => !prev);
            }}
          >
            <IoMdCloseCircle />
          </div>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Enter Movie Name"
              className="px-5 pt-1.5 pb-2 rounded-full outline-none bg-white text-black"
            />
          </div>
          <div>
            <div className="flex flex-row justify-center">
              <Link
                onClick={() => {
                  setMenuVisible(false);
                }}
                to={"/allmovies"}
                className="px-4 py-2 rounded-full hover:bg-gray-900"
              >
                Movies
              </Link>
              <Link
                onClick={() => {
                  setMenuVisible(false);
                }}
                to={"/profile"}
                className="px-4 py-2 rounded-full hover:bg-gray-900"
              >
                Profile
              </Link>
              <Link
                to={"/login"}
                className="px-4 py-2 rounded-full hover:bg-gray-900"
                onClick={() => {
                  setMenuVisible(false);
                  return userExist ? logoutUser : "";
                }}
              >
                {userExist ? "Logout" : "Signin"}
              </Link>
              <div
                className="px-3 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-900 cursor-pointer"
                onClick={() => {
                  setMenuVisible(false);
                  onThemeSwitch();
                }}
              >
                Theme
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
