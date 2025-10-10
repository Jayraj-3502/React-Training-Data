import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoApp from "./components/TodoApp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  FormControlledOne,
  FormControlledTwo,
  FormUncontrolledOne,
  FormUncontrolledTwo,
} from "./Forms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <FormUncontrolledOne />,
      },
      {
        path: "uncontrolledtwo",
        element: <FormUncontrolledTwo />,
      },
      {
        path: "controlled1",
        element: <FormControlledOne />,
      },
      {
        path: "controlled2",
        element: <FormControlledTwo />,
      },
      {
        path: "todoApp",
        element: <TodoApp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
