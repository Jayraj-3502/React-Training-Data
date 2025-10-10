import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Outlet,
  useLoaderData,
} from "react-router-dom";

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function Contact() {
  return <div>Contact Page</div>;
}

function Service() {
  const [data, setData] = useState("");

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => {
          const newRes = res.json();
          return newRes;
        })
        .then((res) => {
          console.log(res);
          setData(res);
        });
    } catch (err) {
      console.log(err);
    } finally {
    }
  }, []);

  return (
    <>
      <div>Service Page Data: {data ? data.title : "Data is Loading"} </div>
    </>
  );
}

function LayoutShowData() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/service">Service</Link>
        </nav>
      </div>

      <hr />

      <Outlet />
    </>
  );
}

export default function SecondWayRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutShowData />}>
            <Route index={true} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/service"} element={<Service />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
