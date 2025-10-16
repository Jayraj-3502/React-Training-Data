import "./Header.css";

export default function Header() {
  return (
    <nav className="nav--primary__layout">
      <div className="nav-section__layout">
        <h3 className="nav-heading">App REP</h3>
      </div>
      <div className="nav-section__layout">
        <ul className="nav-list__design">
          <li className="nav-list_item">Home</li>
          <li className="nav-list_item">Contact</li>
          <li className="nav-list_item">Logout</li>
        </ul>
      </div>
    </nav>
  );
}
