import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout--primary_design">
      <h1>This is Layout</h1>
      <Outlet />
    </div>
  );
}
