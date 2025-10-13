import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "./context/context";
import { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  function getUserDataLocal() {
    try {
      const gettingData = localStorage.getItem("userAuthData");
      const convertedData = JSON.parse(gettingData);
      setUserData(convertedData);
    } catch (err) {
      console.log(err);
    }
  }

  function setLoggedInData() {
    const settedValues = localStorage.setItem(
      "userLoggedIn",
      JSON.stringify([loggedIn])
    );
  }

  function getLoggedInData() {
    const gettingData = localStorage.getItem("userLoggedIn");
    const convertedData = JSON.parse(gettingData);
    setLoggedIn(convertedData);
    console.log(convertedData);
  }

  function setUserDataLocal() {
    try {
      const settedValues = localStorage.setItem(
        "userAuthData",
        JSON.stringify([userData])
      );

      console.log(settedValues);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log("This is called");
    getLoggedInData();
    getUserDataLocal();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        setUserDataLocal,
        getUserDataLocal,
        loggedIn,
        setLoggedIn,
      }}
    >
      <div>
        <h1>This is Heading</h1>
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
}
