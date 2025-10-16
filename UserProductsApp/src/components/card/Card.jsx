import { useNavigate } from "react-router-dom";
import "./Card.css";
import { useProductContext } from "../../contextAPI/contextAPI";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../features/products/product";

export default function Card({
  id = "",
  name = "",
  description = "",
  price = "",
  quantity = "",
}) {
  const navigate = useNavigate();
  // const { dispatch } = useProductContext();
  const dispatch = useDispatch();

  function deleteCurrentProductData() {
    // dispatch({ type: "delete", payload: { id, dispatch } });
    dispatch(deleteProduct(id));
  }

  return (
    <div className="card--primary__design">
      <div className="card-title">Product Name: {name}</div>
      <div className="card-description">Product Description: {description}</div>
      <div className="card-price">Price: {price}</div>
      <div className="card-stock">
        Stock: {quantity ? "In Stock" : "Out of Stock"}
      </div>
      <div className="card-button__layout">
        <button
          className="card-button--edit"
          onClick={() => navigate(`edit/${id}`)}
        >
          Edit
        </button>
        <button
          className="card-button--delete"
          onClick={() => deleteCurrentProductData()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
