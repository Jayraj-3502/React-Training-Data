import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/context";
import { useState, useEffect } from "react";
import {
  Home,
  Home2,
  Header,
  Contact,
  Add,
  EditData,
} from "./components/export";
import Layout from "./pages/layout/Layout";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  function getUserDataLocal() {
    try {
      const gettingData = localStorage.getItem("userLoginData");
      const convertedData = JSON.parse(gettingData);
      console.log(convertedData);
      setUserData(convertedData);
    } catch (err) {
      console.log(err);
    }
  }

  function getCurrentUserDataLocal() {
    try {
      const gettingData = localStorage.getItem("currentUserData");
      const convertedData = JSON.parse(gettingData);
      console.log(convertedData);
      setCurrentUser(convertedData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserDataLocal();
    getCurrentUserDataLocal();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          userData,
          setUserData,
          currentUser,
          setCurrentUser,
        }}
      >
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={""} element={<Home />} />
            <Route path={"home2"} element={<Home2 />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"add"} element={<Add />} />
            <Route path={"edit/:id"} element={<EditData />} />
          </Route>

          <Route path="/auth">
            <Route path="" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </UserContext.Provider>{" "}
    </BrowserRouter>
  );
}
