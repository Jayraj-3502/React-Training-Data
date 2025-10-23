import { useProductContext } from "../../contextAPI/contextAPI";
import { useEffect, useState } from "react";
import "./Add.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/products/product";
import { useNavigate } from "react-router-dom";

export default function Add() {
  // const { state, dispatch } = useProductContext();
  const dispatch = useDispatch();
  const [newProductData, setNewProductData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const navigate = useNavigate();

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(newProductData);

    dispatch(addProduct(newProductData));
    navigate("/");

    // dispatch({ type: "add", payload: newObject });
  }

  return (
    <div>
      <h1>This is Add Page</h1>
      <form
        action=""
        onSubmit={(event) => {
          onHandleSubmit(event);
        }}
      >
        <div>
          Product Name:
          <input
            type="text"
            name="name"
            value={newProductData.name}
            onChange={(event) =>
              setNewProductData((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />
        </div>
        <div>
          Product Description:
          <input
            type="text"
            name="description"
            value={newProductData.description}
            onChange={(event) =>
              setNewProductData((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
          />
        </div>
        <div>
          Product Price:
          <input
            type="number"
            name="price"
            value={newProductData.price}
            onChange={(event) =>
              setNewProductData((prev) => ({
                ...prev,
                price: event.target.value,
              }))
            }
          />
        </div>
        <div>
          Product Quantity:
          <input
            type="number"
            name="quantity"
            value={newProductData.quantity}
            onChange={(event) =>
              setNewProductData((prev) => ({
                ...prev,
                quantity: event.target.value,
              }))
            }
          />
        </div>
        <div>
          <button type="submit">Submit Data</button>
        </div>
      </form>
    </div>
  );
}
