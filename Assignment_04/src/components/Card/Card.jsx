import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({
  id,
  name,
  price,
  description,
  quantity,
  deleteData,
} = {}) {
  return (
    <div key={id} className="card--primary-design">
      <div className="card__item">Name: {name}</div>
      <div className="card__item">Price: {price}</div>
      <div className="card__item">Description :{description}</div>
      <div className="card__item">{quantity ? "In Stock" : "Out of Stock"}</div>
      <div className="card__item-button">
        <button className="card__button">
          <Link to={`edit/${+id}`} className="card__button-link">
            Edit
          </Link>
        </button>
        <button className="card__button">
          <Link className="card__button-link" onClick={() => deleteData(id)}>
            Delete
          </Link>
        </button>
      </div>
    </div>
  );
}
