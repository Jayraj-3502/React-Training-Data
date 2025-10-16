import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { useFetch } from "../../data/fetchData";
import "./Home.css";
import { useProductContext } from "../../contextAPI/contextAPI";

export default function Home() {
  const { state, dispatch } = useProductContext();

  useEffect(() => {
    dispatch;
  }, [state]);

  return (
    <div className="home--primary__layout">
      <h1>This is Home Page Modified</h1>
      <div className="home-cards__layout">
        {state.productsData ? (
          state.productsData.map((item) => {
            // console.log(item);
            return <Card {...item} key={item.id} />;
          })
        ) : (
          <div>Loading Data</div>
        )}
      </div>
    </div>
  );
}
