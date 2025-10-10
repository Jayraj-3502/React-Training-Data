import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useLoaderData,
  NavLink,
} from "react-router-dom";
import "./spinner.css";
import { useState } from "react";

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
  const data = useLoaderData();
  const [loadingState, setLoadingState] = useState(true);
  return (
    <>{!loadingState ? <Spinner /> : <div>Fetched Data: {data.title}</div>}</>
  );
}

function Spinner() {
  return (
    <>
      <div className="spinner-container">
        <div className="spinner" />
      </div>
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LayoutShowData />,
      children: [
        {
          path: "",
          Component: Home,
        },
        {
          path: "about",
          Component: About,
        },
        {
          path: "contact",
          Component: Contact,
        },
        {
          path: "service",
          Component: Service,
          loader: loadingData,
        },
      ],
    },
  ],
  {
    HydrateFallBack: <Spinner />,
  }
);

async function loadingData() {
  try {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await responce.json();
    return data;
  } catch (err) {
    console.log("Error");
  } finally {
  }
}

function LayoutShowData() {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <NavLink to="/service">Service</NavLink>
        </nav>
      </div>

      <hr />

      <Outlet />
    </>
  );
}

export default function FirstWayRouting() {
  // const refrenceId = useRef(null);

  return <RouterProvider router={router} />;
}
