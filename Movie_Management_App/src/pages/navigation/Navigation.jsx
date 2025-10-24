import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="bg-[#121212] flex flex-row justify-center items-center border rounded-full p-3 text-2xl w-fit gap-10 mx-auto text-[18px]">
        <div>
          <div className="bg-[#f5c518] text-black rounded-full px-5 pt-1.5 pb-2 font-bold">
            MMA
          </div>
        </div>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Enter Movie Name"
            className="px-5 pt-1.5 pb-2 rounded-full outline-none bg-white text-black"
          />
        </div>
        <div>
          <div className="flex flex-row">
            <Link className="px-4 py-2 rounded-full hover:bg-gray-900">
              Watch List
            </Link>
            <Link
              to={"/login"}
              className="px-4 py-2 rounded-full hover:bg-gray-900"
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
