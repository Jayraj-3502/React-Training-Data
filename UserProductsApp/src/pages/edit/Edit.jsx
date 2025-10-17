import { useEffect, useState } from "react";
import "./Edit.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectProduct, updateProduct } from "../../features/products/product";

export default function Edit() {
  const currentProductId = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.currentProduct);
  const [currentData, setCurrentData] = useState(productData);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(currentData);
    // dispatch(updateProduct(currentData));
  }

  useEffect(() => {
    // dispatch(selectProduct(currentProductId.id));
    console.log(productData);
    setCurrentData(productData);
  }, [productData]);

  return (
    <div>
      <h1>This is Edit Page</h1>
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
            value={currentData.name}
            onChange={(event) =>
              setCurrentData((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </div>
        <div>
          Product Description:
          <input
            type="text"
            name="description"
            value={currentData.description}
            onChange={(event) =>
              setCurrentData((prev) => ({
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
            value={currentData.price}
            onChange={(event) =>
              setCurrentData((prev) => ({ ...prev, price: event.target.value }))
            }
          />
        </div>
        <div>
          Product Quantity:
          <input
            type="number"
            name="quantity"
            value={currentData.quantity}
            onChange={(event) =>
              setCurrentData((prev) => ({
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
