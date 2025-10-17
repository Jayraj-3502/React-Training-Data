import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/product";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
