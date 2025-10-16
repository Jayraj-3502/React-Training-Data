import { useState } from "react";
import "./Signup.css";
import { useProductContext } from "../../../contextAPI/contextAPI";

export default function Signup() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { state, dispatch } = useProductContext();

  function handleOnSubmit(event) {
    event.preventDefault();
    const exist =
      state.users.find((item) => {
        return item.email === signupData.email;
      }) ?? false;

    console.log(exist);

    if (!exist) {
      console.log("his is running");
      console.log(signupData.password, signupData.confirmPassword);
      if (signupData.password === signupData.confirmPassword) {
        dispatch({ target: "post_user", payload: signupData });
        console.log("this is calless");
      }
    }
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
