import { useDispatch } from "react-redux";
import { useProductContext } from "../../contextAPI/contextAPI";
import "./Header.css";
import { useNavigate, Link, replace } from "react-router-dom";
import { removeCurrentUser } from "../../features/users/user";

export default function Header() {
  const navigate = useNavigate();
  // const { state, dispatch } = useProductContext();
  const dispatch = useDispatch();

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
          <Link
            className="nav-list_item"
            to={"/auth"}
            replace
            onClick={() => {
              dispatch(removeCurrentUser({}));
            }}
          >
            Log out
          </Link>
        </ul>
      </div>
    </nav>
  );
}
