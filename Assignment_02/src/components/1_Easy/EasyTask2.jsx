import { useState } from "react";

export default function EasyTask2() {
  const dragonBallCharacters = ["Goku", "Vegeta", "Gohan", "Piccolo", "Frieza"];

  const dragonBallCharactersCopiledVersion = dragonBallCharacters.map(
    (name, index) => {
      return <div key={`${index}${name}`}>{name}</div>;
    }
  );

  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setShow((prev) => !prev)}
          className="border border-black px-5 py-2.5 rounded-full"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show ? dragonBallCharactersCopiledVersion : "List is Hidden"}
    </div>
  );
}
