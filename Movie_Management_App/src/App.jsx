import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Profile,
  Login,
  Signup,
  Details,
  Layout,
  Search,
} from "./pages/export";
import AllMovies from "./pages/AllMovies";

function App() {
  return (
    <>
      {/* Routing Logic Comes Here  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="allmovies" element={<AllMovies />} />
            <Route path="search/:keyword" element={<Search />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
