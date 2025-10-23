import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Add,
  Edit,
  Contact,
  Layout,
  Login,
  Signup,
} from "./pages/export";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./features/users/user";
import Auth from "./pages/auth/Auth";

export default function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  useEffect(() => {}, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(currentUser).length ? (
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<h1>This is Error</h1>} />
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route path="*" element={<h1>This is Error</h1>} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
