import { useProductContext } from "../../contextAPI/contextAPI";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  // const { state, dispatch } = useProductContext();

  function handleLogout() {
    // dispatch({ target: "remove_current_user", payload: {} });
    console.log("this");
    // navigate("/login");
  }

  return (
    <nav className="nav--primary__layout">
      <div className="nav-section__layout">
        <h3 className="nav-heading">App REP</h3>
      </div>
      <div className="nav-section__layout">
        <ul className="nav-list__design">
          <Link to={""} className="nav-list_item">
            Home
          </Link>
          <Link to={"/add"} className="nav-list_item">
            Add
          </Link>
          <Link to={"/contact"} className="nav-list_item">
            Contact
          </Link>
          <li
            className="nav-list_item"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </nav>
  );
}
