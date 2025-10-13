import { use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { checkAuthentication } from "../../apiCalling";

export default function EditData() {
  const [authenticated, setAuthenticated] = useState(checkAuthentication());
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "0",
    name: "",
    price: 0,
    description: "",
    quantity: 0,
  });
  const [fullData, setFullData] = useState([]);
  const { id } = useParams();

  function gettingProductsData() {
    console.log(id);
    fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setFullData(res);
        setProduct(res.find((item) => +item.id === +id));
      })
      .then((res) => {
        console.log(product);
      });
  }

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
    gettingProductsData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(product);
    console.log(fullData);

    setFullData((prev) =>
      prev.map((item) => {
        if (+item.id === +product.id) {
          return product;
        } else {
          return item;
        }
      })
    );

    try {
      fetch(`http://localhost:3000/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log("Success:", res);
        });
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }

  return (
    <form
      action=""
      onSubmit={(event) => handleSubmit(event)}
      className="form--primary__design"
    >
      <label className="form-lable__design">
        Name:{" "}
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={(event) => {
            setProduct((prev) => {
              return { ...prev, name: event.target.value };
            });
          }}
          className="form-input__design"
        />
      </label>

      <label className="form-lable__design">
        Description:{" "}
        <input
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={(event) => {
            setProduct((prev) => {
              return { ...prev, description: event.target.value };
            });
          }}
          className="form-input__design"
        />
      </label>

      <label className="form-lable__design">
        Price:{" "}
        <input
          type="number"
          id="price"
          name="price"
          value={product.price ? product.price : ""}
          onChange={(event) => {
            setProduct((prev) => {
              return { ...prev, price: +event.target.value };
            });
          }}
          className="form-input__design"
        />
      </label>

      <label className="form-lable__design">
        Quantity:{" "}
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity ? product.quantity : ""}
          onChange={(event) => {
            setProduct((prev) => {
              return { ...prev, quantity: +event.target.value };
            });
          }}
          className="form-input__design"
        />
      </label>

      <button type="submit">Done Edit</button>
    </form>
  );
}
