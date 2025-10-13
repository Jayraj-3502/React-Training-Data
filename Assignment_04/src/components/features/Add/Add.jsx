import { useEffect, useState } from "react";
import { checkAuthentication } from "../../apiCalling";
import { useNavigate } from "react-router-dom";

export function Add() {
  const [authenticated, setAuthenticated] = useState(checkAuthentication());
  const navigate = useNavigate();

  const [newData, setNewData] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, []);

  function handleOnSubmit(event) {
    event.preventDefault();
    newData.id = Date.now().toString();

    try {
      fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log("Success:", res);
          navigate("/");
        });
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }

  return (
    <form
      onSubmit={(event) => {
        handleOnSubmit(event);
      }}
    >
      <label className="form-lable__design">
        Name:{" "}
        <input
          type="text"
          id="name"
          name="name"
          value={newData.name ? newData.name : ""}
          onChange={(event) => {
            setNewData((prev) => {
              return { ...prev, name: event.target.value };
            });
          }}
          className="form-input__design"
          required
        />
      </label>

      <label className="form-lable__design">
        Description:{" "}
        <input
          type="text"
          id="description"
          name="description"
          value={newData.description ? newData.description : ""}
          onChange={(event) => {
            setNewData((prev) => {
              return { ...prev, description: event.target.value };
            });
          }}
          className="form-input__design"
          required
        />
      </label>

      <label className="form-lable__design">
        Price:{" "}
        <input
          type="number"
          id="price"
          name="price"
          value={newData.price ? newData.price : ""}
          onChange={(event) => {
            setNewData((prev) => {
              return { ...prev, price: event.target.value };
            });
          }}
          className="form-input__design"
          required
        />
      </label>

      <label className="form-lable__design">
        Quantity:{" "}
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={newData.quantity ? newData.quantity : ""}
          onChange={(event) => {
            setNewData((prev) => {
              return { ...prev, quantity: event.target.value };
            });
          }}
          className="form-input__design"
          required
        />
      </label>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
