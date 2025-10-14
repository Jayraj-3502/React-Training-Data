import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";

export default function Header() {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logoutUser() {
    setCurrentUser("");
    localStorage.removeItem("currentUserData");
  }

  return (
    <nav className="nav--primary-design">
      <ul className="nav__list">
        <Link to={""} className="nav__list-items">
          Home
        </Link>
        {/* <Link to={"/home2"} className="nav__list-items">
          Home Two
        </Link> */}
        <Link to={"/contact"} className="nav__list-items">
          Contact
        </Link>
        <button
          onClick={() => {
            logoutUser();
            navigate("/auth/login");
          }}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}
