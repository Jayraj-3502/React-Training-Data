import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="p-5">
        <nav className="flex gap-5  justify-center border border-white border-b-black border-b-2 pb-3">
          <Link
            to="/"
            className="border border-black rounded-full px-3 py-1.5 hover:bg-gray-800 hover:text-white"
          >
            Uncontrolled 1
          </Link>
          <Link
            to="/uncontrolledtwo"
            className="border border-black rounded-full px-3 py-1.5 hover:bg-gray-800 hover:text-white"
          >
            Uncontrolled 2
          </Link>
          <Link
            to="/controlled1"
            className="border border-black rounded-full px-3 py-1.5 hover:bg-gray-800 hover:text-white"
          >
            Controlled 1
          </Link>
          <Link
            to="/controlled2"
            className="border border-black rounded-full px-3 py-1.5 hover:bg-gray-800 hover:text-white"
          >
            Controlled 2
          </Link>
          <Link
            to="/todoapp"
            className="border border-black rounded-full px-3 py-1.5 hover:bg-gray-800 hover:text-white"
          >
            Todo
          </Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default App;
