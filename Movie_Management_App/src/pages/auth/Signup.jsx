import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewUser,
  getUsersDetails,
  setCurrentUser,
} from "../../feature/users";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userExist = useSelector((state) => state.user.userExist);

  const [singupDetails, setSignupDetails] = useState({
    userName: "",
    email: "",
    password: "",
    watch_later: [],
    favirout_list: [],
    recently_viewed: [],
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit button clicked");
    const exist = users
      ? users.find((item) => {
          if (item.email === singupDetails.email) {
            return item;
          }
        })
      : false;
    if (!exist) {
      if (singupDetails.password === confirmPassword) {
        const newData = { ...singupDetails, id: nanoid() };
        dispatch(addNewUser(newData));
        dispatch(setCurrentUser(newData));
      } else {
        toast.error("Passwords are not same");
      }
    }
  }

  useEffect(() => {
    dispatch(getUsersDetails());
  }, [dispatch]);

  useEffect(() => {
    if (userExist) {
      navigate("/");
    }
  }, [userExist]);

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-fit max-w-[500px] mx-auto mt-10 p-3 py-6 text-black dark:text-white border rounded-lg text-center"
      >
        <h1 className="text-3xl font-bold mb-3">Signup</h1>
        <div className="flex flex-col gap-3 ">
          <input
            type="text"
            name="name"
            placeholder="Enter User Name"
            value={singupDetails.userName}
            onChange={(event) =>
              setSignupDetails((prev) => ({
                ...prev,
                userName: event.target.value,
              }))
            }
            className="border outline-none px-3 py-1.5 rouneded-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={singupDetails.email}
            onChange={(event) =>
              setSignupDetails((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
            className="border outline-none px-3 py-1.5 rouneded-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={singupDetails.password}
            onChange={(event) =>
              setSignupDetails((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
            className="border outline-none px-3 py-1.5 rouneded-full"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="border outline-none px-3 py-1.5 rouneded-full"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="cursor-pointer border px-3 py-1.5 rounded-full"
          >
            Submit
          </button>
        </div>
        <hr />
        <div>
          <div>
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
        </div>
      </form>
    </>
  );
}
