import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import { UserContext } from "../../context/context";

export default function Home() {
  const { userData, getUserDataLocal, curretUser } = useContext(UserContext);
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData);
    console.log(curretUser);
    // if (!loggedIn) {
    //   navigate("/login");
    // }
    // console.log(loggedIn);

    fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProductsData(res);
        console.log(res);
      });
    console.log(productsData);

    // return () => {};
  }, []);

  function deleteData(id) {
    try {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => console.log(res))
        .then(() => {
          fetch(`http://localhost:3000/products`)
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              setProductsData(res);
            });
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="home--primary__design">
      <div className="home-button__add">
        <Link to={"/add"}>Add New Data</Link>
      </div>
      <div className="home-card__container">
        {productsData.map((data) => {
          const { id } = data;
          return <Card {...data} key={id} deleteData={deleteData} />;
        })}
      </div>
    </div>
  );
}
