import { Outlet } from "react-router-dom";
import { Navigation } from "../export";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser, getUsersDetails } from "../../feature/users";

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
    <div className="bg-black min-h-screen p-5 text-white">
      <Navigation userExist={userExist} />
      <Outlet />
    </div>
  );
}
