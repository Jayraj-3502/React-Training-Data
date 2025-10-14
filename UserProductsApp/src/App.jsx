import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Add, Edit, Login, Signup, Contact } from "./pages/export";
import Layout from "./pages/layout/Layout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
