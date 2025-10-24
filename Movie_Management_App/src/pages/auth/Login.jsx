import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  getUsersDetails,
  setCurrentUser,
} from "../../feature/users";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const userExist = useSelector((state) => state.user.userExist);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDetails.email);
    console.log(usersData);
    console.log("Sumited Data");
    const exist = usersData.find((data) => {
      if (
        data.email === userDetails.email &&
        data.password === userDetails.password
      ) {
        return true;
      }
    });
    if (exist) {
      console.log("success");
      dispatch(setCurrentUser(exist));
    }
  };

  useEffect(() => {
    dispatch(getUsersDetails());
    dispatch(getCurrentUser());
  }, []);

  useEffect(() => {
    if (userExist) {
      navigate("/");
    }
  }, [userExist]);

  return (
    <>
      <h1>Login Page new</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="">Login</div>
        <div className="flex flex-col">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={(event) => {
                setUserDetails((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
              className="border outline-none px-3 py-1.5 rouneded-full"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={userDetails.password}
              onChange={(event) => {
                setUserDetails((prev) => ({
                  ...prev,
                  password: event.target.value,
                }));
              }}
              className="border outline-none px-3 py-1.5 rouneded-full"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="cursor-pointer border px-3 py-1.5 rounded-full"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
