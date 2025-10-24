import { Outlet } from "react-router-dom";
import { Navigation } from "../export";

export default function Layout() {
  return (
    <div className="bg-black min-h-screen p-5 text-white">
      <Navigation />
      <Outlet />
    </div>
  );
}
