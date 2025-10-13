import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home2 from "./components/Home2/Home2.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import EditData from "./components/features/Edit/EditData.jsx";
import { Add } from "./components/features/Add/Add.jsx";
import Login from "./authentication/Login/Login.jsx";
// import { UserContext } from "./context/context.jsx";
// import { UserContextProvider } from "./context/context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home2",
        element: <Home2 />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "edit/:id",
        element: <EditData />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    {/* <UserContextProvider> */}

    <div className="root--primary">
      {/* <UserContext.Provider> */}
      <App />
    </div>
    {/* </UserContext.Provider> */}
    {/* </UserContextProvider> */}
  </RouterProvider>
);
