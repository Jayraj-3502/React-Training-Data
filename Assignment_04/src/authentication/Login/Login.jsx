import { useContext, useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";
import "./Login.css";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const { userData, setUserData, currentUser, setCurrentUser } =
    useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    if (
      userData[0].email === inputEmail &&
      userData[0].password === inputPassword
    ) {
      console.log(true);
      setUserData((prev) =>
        prev.map((item) => {
          if (item.email === inputEmail) {
            return { ...item, loggedIn: true };
          } else {
            return item;
          }
        })
      );
      setCurrentUser(
        userData.find((item) => {
          if (item.email === inputEmail) {
            return item;
          }
        })
      );
      setCurrentUserToLocal();
      navigate("/");
    } else {
      console.log(false);
    }
  }

  function setCurrentUserToLocal() {
    let value = userData.find((item) => {
      if (item.email === inputEmail) {
        return item;
      }
    });
    try {
      localStorage.setItem("currentUserData", JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
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
        type="email"
        name="email"
        placeholder="Enter your Email"
        value={inputEmail}
        onChange={(event) => {
          setInputEmail(event.target.value);
        }}
        required
        className="input-box"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={inputPassword}
        onChange={(event) => {
          setInputPassword(event.target.value);
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
