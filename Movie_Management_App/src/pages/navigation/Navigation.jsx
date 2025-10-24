import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeCurrentUser } from "../../feature/users";

export default function Navigation({ userExist = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutUser() {
    dispatch(removeCurrentUser());
    navigate("/login");
  }

  // useEffect(() => {
  //   console.log("navigation reload: ", userExist);
  // }, [userExist]);

  return (
    <>
      <nav className="bg-[#121212] flex flex-row justify-center items-center border rounded-full p-3 text-2xl w-fit gap-10 mx-auto text-[18px]">
        <div>
          <Link
            to={"/"}
            className="bg-[#f5c518] text-black rounded-full px-5 pt-1.5 pb-2 font-bold"
          >
            MMA
          </Link>
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
          <div className="flex flex-row">
            <Link
              to={"/profile"}
              className="px-4 py-2 rounded-full hover:bg-gray-900"
            >
              Profile
            </Link>
            <Link
              to={"/login"}
              className="px-4 py-2 rounded-full hover:bg-gray-900"
              onClick={userExist ? logoutUser : ""}
            >
              {userExist ? "Logout" : "Signin"}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
