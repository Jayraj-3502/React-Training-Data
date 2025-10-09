import { useRef } from "react";
import {
  ControlledComponentSingleState,
  ControlledComponentIndividuaState,
} from "./components/ControlledComponent";
import {
  UncontrolledComponentVersoin19Minus,
  UncontrolledComponentVersoin19Plus,
} from "./components/UncontrolledComponent";
import { useState } from "react";

function App() {
  const uncontrolledRef2 = useRef(null);
  const uncontrolledRef = useRef(null);

  // This is individual states to hold the data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // This is the single object state to add all data
  const resetCompleteData = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    password: "",
  };
  const [completeData, setCompleteData] = useState(resetCompleteData);

  // form submit event handler to prevent default reload
  function handleOnSubmitEventForIndividualState(event) {
    event.preventDefault();
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Age: ", age);
    console.log("Phone: ", phone);
    console.log("Password: ", password);
    setAge("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setPhone("");
  }

  function handleOnSubmitEventForSingleState(event) {
    event.preventDefault();
    formValidation(completeData);
  }

  function formValidation(data) {
    if (data["firstName"].length < 2) {
      alert("First Name must contain at least 2 characters.");
    } else if (data["lastName"].length < 2) {
      alert("Last Name must contain at least 2 characters.");
    } else if (data["password"].length < 6) {
      alert("Password must contain at least 6 characters.");
    } else if (
      data["phone"].toString().length > 10 ||
      data["phone"].toString().length < 10
    ) {
      alert("Phone Number only have 10 digit.");
    } else {
      console.log(data["firstName"].length);
      console.log(data);
      setCompleteData(resetCompleteData);
    }
  }

  function handleOnSubmitEventUncontrolled(event, ref) {
    event.preventDefault();
    console.log(ref.current);
    console.log(event.target);
  }

  function individuaStateUpdate(event) {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        console.log(event.target.name);
    }
  }

  function singleStateObjectUpdate(event) {
    setCompleteData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="p-5">
      <form
        className="p-5 max-w-[500px] min-w-[300px] mx-auto text-center border border-black rounded-[10px]"
        onSubmit={(event) =>
          handleOnSubmitEventUncontrolled(event, uncontrolledRef)
        }
      >
        <h1 className="text-3xl font-bold">
          Uncontrolled From Fields react version 19+
        </h1>
        <div>
          <UncontrolledComponentVersoin19Plus
            type={"text"}
            name={"firstName"}
            value={"Monkey D Luffy"}
            ref={uncontrolledRef}
          />
        </div>
      </form>

      <hr className="my-5" />

      <form
        className="p-5 max-w-[500px] min-w-[300px] mx-auto text-center border border-black rounded-[10px]"
        onSubmit={(event) =>
          handleOnSubmitEventUncontrolled(event, uncontrolledRef2)
        }
      >
        <h1 className="text-3xl font-bold">
          Uncontrolled From Fields react version 19-
        </h1>
        <div>
          <UncontrolledComponentVersoin19Minus
            type={"text"}
            name={"firstName"}
            value={"Monkey D Dragon"}
            ref={uncontrolledRef2}
          />
        </div>
      </form>

      <hr className="my-5" />

      <form
        className="p-5 max-w-[500px] min-w-[300px] mx-auto text-center border border-black rounded-[10px]"
        onSubmit={(event) => handleOnSubmitEventForIndividualState(event)}
      >
        {/* Contolled Input with Individual States  */}
        <div className="flex flex-col gap-2 mb-3">
          <h1 className="text-3xl font-bold">
            Controlled Component with Individual Property States:
          </h1>
          <ControlledComponentIndividuaState
            type={"text"}
            name={"firstName"}
            value={firstName}
            placeholder={"Enter First Name"}
            individuaStateUpdate={individuaStateUpdate}
          />
          <ControlledComponentIndividuaState
            type={"text"}
            name={"lastName"}
            value={lastName}
            placeholder={"Enter Last Name"}
            individuaStateUpdate={individuaStateUpdate}
          />
          <ControlledComponentIndividuaState
            type={"email"}
            name={"email"}
            value={email}
            placeholder={"Enter Email"}
            individuaStateUpdate={individuaStateUpdate}
          />
          <ControlledComponentIndividuaState
            type={"number"}
            name={"phone"}
            value={phone}
            placeholder={"Enter Phone Number"}
            individuaStateUpdate={individuaStateUpdate}
          />
          <ControlledComponentIndividuaState
            type={"number"}
            name={"age"}
            value={age}
            placeholder={"Enter Age"}
            individuaStateUpdate={individuaStateUpdate}
          />
          <ControlledComponentIndividuaState
            type={"password"}
            name={"password"}
            value={password}
            placeholder={"Enter Password"}
            individuaStateUpdate={individuaStateUpdate}
          />
        </div>
        <button className="border border-black px-3 py-2 rounded-full ml-5">
          Click
        </button>
      </form>

      <hr className="my-5" />

      <form
        className="p-5 max-w-[500px] min-w-[300px] mx-auto text-center border border-black rounded-[10px]"
        onSubmit={(event) => handleOnSubmitEventForSingleState(event)}
      >
        {/* Contolled Input with Single States  */}
        <div className="flex flex-col gap-2 mb-3">
          <h1 className="text-3xl font-bold">
            Controlled Component with Signle Property States:
          </h1>
          <ControlledComponentSingleState
            type={"text"}
            name={"firstName"}
            value={completeData.firstName}
            placeholder={"Enter First Name"}
            singleStateObjectUpdate={singleStateObjectUpdate}
          />
          <ControlledComponentSingleState
            type={"text"}
            name={"lastName"}
            value={completeData.lastName}
            placeholder={"Enter Last Name"}
            singleStateObjectUpdate={singleStateObjectUpdate}
          />
          <ControlledComponentSingleState
            type={"email"}
            name={"email"}
            value={completeData.email}
            placeholder={"Enter Email"}
            singleStateObjectUpdate={singleStateObjectUpdate}
          />
          <ControlledComponentSingleState
            type={"number"}
            name={"phone"}
            value={completeData.phone}
            placeholder={"Enter Phone Number"}
            singleStateObjectUpdate={singleStateObjectUpdate}
          />
          <ControlledComponentSingleState
            type={"number"}
            name={"age"}
            value={completeData.age}
            placeholder={"Enter Age"}
            singleStateObjectUpdate={singleStateObjectUpdate}
          />
          <ControlledComponentSingleState
            type={"password"}
            name={"password"}
            value={completeData.password}
            placeholder={"Enter Password"}
            singleStateObjectUpdate={singleStateObjectUpdate}
          />
        </div>
        <button className="border border-black px-3 py-2 rounded-full ml-5">
          Click
        </button>
      </form>
    </div>
  );
}

export default App;
