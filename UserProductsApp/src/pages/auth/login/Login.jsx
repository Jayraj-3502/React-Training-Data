import { useEffect, useState } from "react";
import "./Login.css";
import { useProductContext } from "../../../contextAPI/contextAPI";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { state, dispatch } = useProductContext();
  const navigate = useNavigate();

  function onHandleSubmit(event) {
    event.preventDefault();

    console.log(state);
    console.log(userData);

    const finded = state.users.find((item) => {
      console.log("this is running");
      return (
        item.email === userData.email && item.password === userData.password
      );
    });

    console.log(finded);

    if (finded) {
      dispatch({
        type: "current_user_update",
        payload: userData,
      });
      console.log("this");
      navigate("/");
      return;
    } else {
      console.log("loginfailed");
    }
  }

  useEffect(() => {
    // if (state.currentUserData === null) {
    //   navigate("/");
    // }
  }, [state]);

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
