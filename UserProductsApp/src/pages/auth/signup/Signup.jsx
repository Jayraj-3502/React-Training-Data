import { useState } from "react";
import "./Signup.css";
import { useProductContext } from "../../../contextAPI/contextAPI";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../features/users/user";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  function handleOnSubmit(event) {
    event.preventDefault();
    const present = users.find((user) => user.email === signupData.email);

    if (!present) {
      dispatch(addUser(signupData));
      resetData();
      navigate("/");
    } else {
      alert("User Already Present");
    }
  }

  function resetData() {
    setSignupData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div>
      <h1>This is Signup Page</h1>
      <form
        action=""
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            onClick={(event) => {
              setSignupData((prev) => ({
                ...prev,
                name: event.target.valueent,
              }));
            }}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            onClick={(event) => {
              setSignupData((prev) => ({ ...prev, email: event.target.value }));
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            onClick={(event) => {
              setSignupData((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            required
            onClick={(event) => {
              setSignupData((prev) => ({
                ...prev,
                confirmPassword: event.target.value,
              }));
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
