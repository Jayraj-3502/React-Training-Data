import { useState } from "react";
import EasyTask1 from "./components/1_Easy/EasyTask1";
import EasyTask2 from "./components/1_Easy/EasyTask2";
import EasyTask3 from "./components/1_Easy/EasyTask3";
import MediumTask1 from "./components/2_Medium/MediumTask1";
import MediumTask2 from "./components/2_Medium/MediumTask2";
import MediumTask3 from "./components/2_Medium/MediumTask3";
import SemiHardTask1 from "./components/3_Semi_Hard/SemiHardTask1";
import SemiHardTask2 from "./components/3_Semi_Hard/SemiHardTask2";
import SemiHardTask3 from "./components/3_Semi_Hard/SemiHardTask3";

export default function App() {
  const [showMD3, setShowMD3] = useState(true);
  const [compound, setCompound] = useState("");

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="text-4xl text-red-500 text-center">
          <h1>Easy Level Questions:</h1>
        </div>
        {/* Task One Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task One:</h3>
          <EasyTask1 />
        </div>
        <hr className="my-3" />
        {/* Task Two Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task Two:</h3>
          <EasyTask2 />
        </div>
        <hr className="my-3" />
        {/* Task Three Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task Three:</h3>
          <EasyTask3 />
        </div>
        <hr className="my-3" />
      </div>
      {/* This Section is for Medium Level Questions */}
      <div className="flex flex-col gap-5">
        <div className="text-4xl text-red-500 text-center">
          <h1>Medium Level Questions:</h1>
        </div>
        {/* Task One Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task One:</h3>
          <MediumTask1 />
        </div>
        <hr className="my-3" />
        {/* Task Two Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task Two:</h3>
          <MediumTask2 />
        </div>
        <hr className="my-3" />
        {/* Task Three Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task Three:</h3>
          <button
            onClick={() => {
              setShowMD3((prev) => !prev);
            }}
            className="border border-black px-5 py-2.5 rounded-full"
          >
            {showMD3 ? "Delete" : "Create"}
          </button>
          {showMD3 ? (
            <MediumTask3 compound={compound} setCompound={setCompound} />
          ) : (
            "Component Delete"
          )}
          <div>This is the State: {compound}</div>
        </div>
        <hr className="my-3" />
      </div>

      {/* This Section is for Semi Hard Level Questions */}
      <div className="flex flex-col gap-5">
        <div className="text-4xl text-red-500 text-center">
          <h1>Semi Hard Level Questions:</h1>
        </div>
        {/* Task One Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task One:</h3>
          <SemiHardTask1 />
        </div>
        <hr className="my-3" />
        {/* Task Two Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task Two:</h3>
          <SemiHardTask2 />
        </div>
        <hr className="my-3" />
        {/* Task Three Render Code */}
        <div className="flex flex-col gap-2 w-[500px] text-center mx-auto">
          <h3 className="text-2xl">Task Three:</h3>
          <SemiHardTask3 />
        </div>
        <hr className="my-3" />
      </div>
    </div>
  );
}
