import { Outlet } from "react-router-dom";
import { Header } from "../../components/export";

export default function Layout() {
  return (
    <div className="layout--primary__design">
      <Header />
      <Outlet />
    </div>
  );
}
