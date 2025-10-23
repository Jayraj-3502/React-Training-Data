import { useEffect, useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  getCurrentUser,
  gettingUsersData,
  addUser,
} from "../../features/users/user";

export default function Auth() {
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const usersData = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onLoginHandleSubmit(event) {
    event.preventDefault();
    console.log(usersData);
    console.log(currentUser);
    checkingUser();
    setLoginUserData({ email: "", password: "" });
  }

  function checkingUser() {
    console.log(loginUserData);
    const result = usersData.find(
      (user) =>
        user.email === loginUserData.email &&
        user.password === loginUserData.password
    );
    if (result) {
      dispatch(setCurrentUser(result));
      navigate("/");
    }
  }

  function onSignupHandleSubmit(event) {
    event.preventDefault();
    const present = usersData.find((user) => user.email === signupData.email);

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

  useEffect(() => {
    dispatch(gettingUsersData());
    dispatch(getCurrentUser());
    console.log("This is running");
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [dispatch]);

  return (
    <div>
      <div>
        <button>Login</button>
        <button>Signup</button>
      </div>
      <hr />
      <div>
        <div>
          {/* // Login form */}
          <form
            action=""
            onSubmit={(event) => {
              onLoginHandleSubmit(event);
            }}
          >
            <div>
              <input
                type="email"
                name="eamil"
                value={loginUserData.email}
                placeholder="Enter Your Eamil"
                onChange={(event) => {
                  setLoginUserData((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={loginUserData.password}
                placeholder="Enter Your Password"
                onChange={(event) => {
                  setLoginUserData((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>
          {/* // Signup form */}
          <form
            action=""
            onSubmit={(event) => {
              onSignupHandleSubmit(event);
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
                  setSignupData((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
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
      </div>
    </div>
  );
}
