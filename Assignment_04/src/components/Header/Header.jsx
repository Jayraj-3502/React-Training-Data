import { Link } from "react-router-dom";

export default function Header() {
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
      </ul>
    </nav>
  );
}
