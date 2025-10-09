export function ControlledComponentIndividuaState({
  type = "text",
  name = "",
  value = "",
  placeholder = "",
  individuaStateUpdate = (event) => {},
}) {
  return (
    <div className="">
      <input
        className={`outline-none border border-black px-3 py-2 rounded-full ${
          name === "phone"
            ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            : ""
        }`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required
        onChange={(event) => individuaStateUpdate(event)}
      />
    </div>
  );
}

export function ControlledComponentSingleState({
  type = "text",
  name = "",
  value = "",
  placeholder = "",
  singleStateObjectUpdate = (event) => {},
}) {
  return (
    <div className="">
      <input
        className={`outline-none border border-black px-3 py-2 rounded-full ${
          name === "phone"
            ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            : ""
        }`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required
        onChange={(event) => singleStateObjectUpdate(event)}
      />
    </div>
  );
}
