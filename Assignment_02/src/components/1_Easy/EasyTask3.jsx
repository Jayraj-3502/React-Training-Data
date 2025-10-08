import { useState } from "react";

export default function EasyTask3() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="text-xl mb-2">{counter}</div>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
          className="border border-black px-5 py-2.5 rounded-full"
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
          className="border border-black px-5 py-2.5 rounded-full"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
