import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewUser,
  getUsersDetails,
  setCurrentUser,
} from "../../feature/users";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

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
      <h1 className="text-5xl font-bold">Signup Page</h1>
      <form action="" onSubmit={handleSubmit}>
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
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
