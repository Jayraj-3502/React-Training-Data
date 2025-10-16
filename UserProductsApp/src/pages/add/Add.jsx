import { useProductContext } from "../../contextAPI/contextAPI";
import { useEffect, useState } from "react";
import "./Add.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/products/product";

export default function Add() {
  // const { state, dispatch } = useProductContext();
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(productName);
    console.log(productDescription);
    console.log(productPrice);
    console.log(productQuantity);

    const newObject = {
      id: Date.now().toString(),
      name: productName,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
    };

    dispatch(addProduct(newObject));
    // dispatch({ type: "add", payload: newObject });
  }

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

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
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div>
          Product Description:
          <input
            type="text"
            name="description"
            value={productDescription}
            onChange={(event) => setProductDescription(event.target.value)}
          />
        </div>
        <div>
          Product Price:
          <input
            type="number"
            name="price"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
          />
        </div>
        <div>
          Product Quantity:
          <input
            type="number"
            name="quantity"
            value={productQuantity}
            onChange={(event) => setProductQuantity(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit Data</button>
        </div>
      </form>
    </div>
  );
}
