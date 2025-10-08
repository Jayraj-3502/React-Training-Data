import { useEffect, useRef, useState } from "react";

export default function MediumTask2() {
  const [otpValue, setOtpValue] = useState([]);
  const otpOne = useRef(null);
  const otpTwo = useRef(null);
  const otpThree = useRef(null);
  const otpFour = useRef(null);

  function updateValue(value) {
    setOtpValue((prev) => [...prev, value]);
  }

  function focuschange() {
    if (!otpOne.current.value) {
      otpOne.current.focus();
    } else if (!otpTwo.current.value) {
      updateValue(otpOne.current.value);
      otpTwo.current.focus();
    } else if (!otpThree.current.value) {
      updateValue(otpTwo.current.value);
      otpThree.current.focus();
    } else if (!otpFour.current.value) {
      updateValue(otpThree.current.value);
      otpFour.current.focus();
    } else {
      updateValue(otpFour.current.value);
      console.log(otpOne.current.value);
    }
  }

  return (
    <div>
      <div className="mb-3">
        <input
          type="number"
          name="otpValue1"
          min={0}
          max={9}
          minLength={1}
          maxLength={1}
          className=" h-[50px] w-[50px] text-center border border-black p-2 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          ref={otpOne}
        />
        <input
          type="number"
          name="otpValue2"
          className=" h-[50px] w-[50px] text-center border border-black p-2 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          ref={otpTwo}
        />
        <input
          type="number"
          name="otpValue3"
          className=" h-[50px] w-[50px] text-center border border-black p-2 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          ref={otpThree}
        />
        <input
          type="number"
          name="otpValue4"
          className=" h-[50px] w-[50px] text-center border border-black p-2 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          ref={otpFour}
        />
      </div>
      <div>
        <button
          onClick={() => {
            focuschange();
          }}
          className="border border-black px-3 py-2 rounded-full"
        >
          Focus
        </button>
      </div>
    </div>
  );
}
