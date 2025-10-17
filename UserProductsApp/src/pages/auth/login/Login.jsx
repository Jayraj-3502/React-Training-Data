import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, getCurrentUser } from "../../../features/users/user";

export default function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const usersData = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    checkingUser();
    setUserData({ email: "", password: "" });
  }

  function checkingUser() {
    const result = usersData.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );
    if (result) {
      dispatch(setCurrentUser(result));
      navigate("/");
    }
  }

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div>
      <h1>This is Login Page</h1>
      <form
        action=""
        onSubmit={(event) => {
          onHandleSubmit(event);
        }}
      >
        <div>
          <input
            type="email"
            name="eamil"
            value={userData.email}
            placeholder="Enter Your Eamil"
            onChange={(event) => {
              setUserData((prev) => ({ ...prev, email: event.target.value }));
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={userData.password}
            placeholder="Enter Your Password"
            onChange={(event) => {
              setUserData((prev) => ({
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
  );
}
