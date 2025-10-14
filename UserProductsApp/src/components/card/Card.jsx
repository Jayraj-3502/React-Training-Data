import "./Card.css";

export default function Card() {
  return (
    <div className="card--primary__design">
      <div className="card-title">Product Name</div>
      <div className="card-description">Product Description</div>
      <div className="card-price">Price</div>
      <div className="card-stock">In Stock</div>
      <div className="card-button__layout">
        <button className="card-button--edit">Edit</button>
        <button className="card-button--delete">Delete</button>
      </div>
    </div>
  );
}
