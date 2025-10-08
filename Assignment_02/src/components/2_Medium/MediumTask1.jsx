import { useState } from "react";

export default function MediumTask1() {
  const [studentsOfLeafVillageAcademy, setStudentsOfLeafVillageAcademy] =
    useState([
      { name: "Naruto Uzumaki", inClass: "10-A", age: 17 },
      { name: "Sasuke Uchiha", inClass: "10-A", age: 17 },
      { name: "Sakura Haruno", inClass: "10-A", age: 17 },
      { name: "Shikamaru Nara", inClass: "10-B", age: 18 },
      { name: "Hinata Hyuga", inClass: "10-A", age: 17 },
    ]);

  const [name, setName] = useState("");
  const [inClass, setInClass] = useState("");
  const [age, setAge] = useState(0);

  function setNewStudentData() {
    if (name ?? age ?? inClass) {
      let newStudentObj = { name: name, inClass: inClass, age: age };
      setStudentsOfLeafVillageAcademy((prev) => [...prev, newStudentObj]);
      setName("");
      setAge("");
      setInClass("");
      console.log("Trigred");
    }
  }

  return (
    <div>
      {/* Input Student Data  */}
      <div className="flex flex-col gap-1 mb-3">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="outline-none border border-black px-3 py-2 rounded-full"
          onChange={(event) => setName(event.target.value)}
          value={name}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          className="outline-none border border-black px-3 py-2 rounded-full"
          onChange={(event) => setAge(event.target.value)}
          value={age}
          required
        />
        <input
          type="text"
          name="class"
          placeholder="Enter Class"
          className="outline-none border border-black px-3 py-2 rounded-full"
          onChange={(event) => setInClass(event.target.value)}
          value={inClass}
          required
        />
        <button
          className="outline-none border border-black px-3 py-2 rounded-full"
          onClick={() => {
            setNewStudentData();
          }}
          type="submit"
        >
          Submit
        </button>
      </div>

      {/* Student Data Showing Here  */}
      <div className="h-[200px] overflow-auto">
        {studentsOfLeafVillageAcademy.map((studentData, index) => {
          const { name, inClass, age } = studentData;
          return (
            <div
              className="border border-white bg-yellow-500 rounded-full px-5 py-2.5 text-white font-bold"
              key={`${index}${name}`}
            >
              Name: {name}, Class: {inClass}, Age: {age}
            </div>
          );
        })}
      </div>
    </div>
  );
}
