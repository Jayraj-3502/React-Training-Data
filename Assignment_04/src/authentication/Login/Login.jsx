import { useContext, useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { setAuthentication } from "../../components/apiCalling";
import { UserContext } from "../../context/context";

export default function Login() {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const { getUserDataLocal, userData, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getUserDataLocal();
  }, []);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    console.log(userData[0].name);
    if (
      userData[0].name === inputName &&
      userData[0].password === inputPassword
    ) {
      console.log(true);
      setLoggedIn(true);
      navigate("/");
    } else {
      console.log(false);
    }
  }

  return (
    <form
      action=""
      onSubmit={(event) => {
        onHandleSubmit(event);
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        value={inputName}
        onChange={(event) => {
          setInputName(event.target.value);
        }}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={inputPassword}
        onChange={(event) => {
          setInputPassword(event.target.value);
        }}
        required
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
