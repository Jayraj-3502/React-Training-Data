import InputFields from "./components/form/InputFields";

function App() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <InputFields
        type="text"
        name="firstName"
        placeholder="Enter First Name"
        className="border border-black outline-none rounded-full px-3 py-2"
      />
      <InputFields
        type="text"
        name="lastName"
        placeholder="Enter Last Name"
        className="border border-black outline-none rounded-full px-3 py-2"
      />
      <InputFields
        type="email"
        name="email"
        placeholder="Enter Email"
        className="border border-black outline-none rounded-full px-3 py-2"
      />
      <InputFields
        type="tel"
        name="phoneNumber"
        placeholder="Enter Phone Number"
        className="border border-black outline-none rounded-full px-3 py-2"
      />
    </div>
  );
}

export default App;
