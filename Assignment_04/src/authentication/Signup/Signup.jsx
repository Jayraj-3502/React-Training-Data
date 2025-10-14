import { useContext, useState } from "react";
import "../Login/Login.css";
import { UserContext } from "../../context/context";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("");
  const { userData, currentUser, setCurrentUser } = useContext(UserContext);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(setSignupData());
    setuserDataLocal();
    console.log(userData);
  }

  function setuserDataLocal() {
    if (!userData) {
      try {
        localStorage.setItem(
          "userLoginData",
          JSON.stringify([setSignupData()])
        );
        setCurrentUser(setSignupData());
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        localStorage.setItem(
          "userLoginData",
          JSON.stringify([...userData, setSignupData()])
        );
        setCurrentUser(setSignupData());
      } catch (err) {
        console.log(err);
      }
    }
  }

  function setSignupData() {
    let newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
      confirmPassword: confirmUserPassword,
      loggedIn: true,
    };

    return newUser;
  }

  return (
    <form
      action=""
      onSubmit={(event) => {
        onHandleSubmit(event);
      }}
      className="form--primary__design"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        required
        className="input-box"
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        value={userEmail}
        onChange={(event) => {
          setUserEmail(event.target.value);
        }}
        required
        className="input-box"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={userPassword}
        onChange={(event) => {
          setUserPassword(event.target.value);
        }}
        required
        className="input-box"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Enter Confirmed Password"
        value={confirmUserPassword}
        onChange={(event) => {
          setConfirmUserPassword(event.target.value);
        }}
        required
        className="input-box"
      />
      <div>
        <button type="submit" className="input-button">
          Submit
        </button>
      </div>
    </form>
  );
}
