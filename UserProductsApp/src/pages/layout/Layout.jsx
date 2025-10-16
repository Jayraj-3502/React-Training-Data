import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Header } from "../../components/export";

export default function Layout() {
  return (
    <div className="layout--primary_design">
      <h1>This is Layout</h1>
      <Header />
      <Outlet />
    </div>
  );
}
