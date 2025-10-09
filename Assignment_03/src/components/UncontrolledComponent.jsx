import { forwardRef } from "react";

export function UncontrolledComponentVersoin19Plus({
  type = "text",
  name = "",
  value = "",
  ref = "",
}) {
  return (
    <div className="p-5">
      <input
        className="outline-none border border-black px-3 py-2 rounded-full"
        type={type}
        name={name}
        value={value}
        ref={ref}
        readOnly
      />
      <button
        onClick={() => {
          console.log(ref.current.value);
        }}
        className="border border-black px-3 py-2 rounded-full ml-5"
      >
        Click
      </button>
    </div>
  );
}

export const UncontrolledComponentVersoin19Minus = forwardRef(
  ({ type = "text", name = "", value = "" }, ref) => {
    return (
      <div className="p-5">
        <input
          className="outline-none border border-black px-3 py-2 rounded-full"
          type={type}
          name={name}
          value={value}
          ref={ref}
          readOnly
        />
        <button
          onClick={() => {
            console.log(ref.current.value);
          }}
          className="border border-black px-3 py-2 rounded-full ml-5"
        >
          Click
        </button>
      </div>
    );
  }
);
