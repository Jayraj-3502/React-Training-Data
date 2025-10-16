import { useEffect, useState } from "react";
import "./Edit.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../contextAPI/contextAPI";
import { useFetch } from "../../data/fetchData";

export default function Edit() {
  const { state, dispatch } = useProductContext();
  const currentProductId = useParams();

  const [currentData, setCurrentData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  function onHandleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "edited", payload: currentData });

    // dispatch({ type: "add", payload: newObject });
  }

  async function fetchingCurrentProduct() {
    console.log("runs");
    const responce = await useFetch({
      mainURL: `products/${currentProductId.id}`,
      method: "GET",
    });
    const data = await responce;
    console.log(data);
    setCurrentData(data);
    dispatch({ type: "editingProduct", payload: data });
  }

  useEffect(() => {
    fetchingCurrentProduct();
    console.log("this runs");
  }, []);

  // useEffect(() => {}, [state]);

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
