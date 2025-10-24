import { useState } from "react";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(EventTarget.target);
  };

  return (
    <>
      <h1>Login Page new</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="">Login</div>
        <div className="flex flex-col">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={(event) => {
                setUserDetails((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={userDetails.password}
              onChange={(event) => {
                setUserDetails((prev) => ({
                  ...prev,
                  password: event.target.value,
                }));
              }}
              className="border  outline-none"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
