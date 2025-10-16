import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const { state, dispatch } = useProductContext();

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  return (
    <div className="home--primary__layout">
      <h1>This is Home Page Modified</h1>
      <div className="home-cards__layout">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
