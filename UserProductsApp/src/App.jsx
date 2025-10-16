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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<h1>This is Error</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
