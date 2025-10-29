import { Outlet } from "react-router-dom";
import { Navigation } from "../export";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser, getUsersDetails } from "../../feature/users";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  const dispatch = useDispatch();
  const userExist = useSelector((state) => state.user.userExist);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getUsersDetails());
  }, [dispatch]);

  useEffect(() => {
    console.log(userExist);
  }, [userExist]);

  return (
    <div className="bg-white dark:bg-black min-h-screen h-full p-5 text-white">
      <Navigation userExist={userExist} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Outlet />
    </div>
  );
}
