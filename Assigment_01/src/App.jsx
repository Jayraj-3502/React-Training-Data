import { useState } from "react";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/ Task3";
import Task4 from "./components/Task4";
import MediumTask1 from "./components/Medium/MediumTask1";
import MediumTask2 from "./components/Medium/MediumTask2";
import MediumTask3 from "./components/Medium/MediumTask3";
import MediumTask4 from "./components/Medium/MediumTask4";
import MediumTask5 from "./components/Medium/MediumTask5";
import SemiHardTask1 from "./components/SemiHard/SemiHardTask1";
import SemiHardTask2 from "./components/SemiHard/SemiHardTask2";
import SemiHardTask3 from "./components/SemiHard/SemiHardTask3";

function App() {
  const [count, setCount] = useState(0);

  const nameArray = ["Charlizard", "Balbasour", "Pikachu"];

  // Medium Task Data

  // Task 1
  const [nameAgeArray, setNameAgeArray] = useState([{name: 'Charlizard', age: 15}, {name: 'Dragonite', age: 20}, {name: 'Pikachu', age: 17}]);

  // Task 2
  const [task2Number, setTask2Number] = useState(1);

  // Task 3
  const [task3Num, setTask3Num] = useState(10);

  function updateNumber() {
    setTask3Num(prev => prev + 100);
  }


  // Semi Hard Questions

  // Task 1
  const [childValue, setChildValue] = useState(0);
  const [parentValue, setparentValue] = useState(0);

  function parentValueUpdater() {
    setparentValue(prev => prev + 1);
  }

  function childValueUpdater() {
    setChildValue(prev => prev+1);
  }


  return (
    <>
      <h1 className="text-5xl ">This is Main App.</h1>

      {/* <h2>Easy Questions:</h2>

      <h3>Task 1:</h3>
      <Task1 />

      <h3>Task 2:</h3>
      {
        nameArray.map((name, index) => {
          return <Task2 name={name} key={index}/>
          // console.log(name);
        })
      }

      <h3>Task 3:</h3>
      <Task3 />

      <h3>Task 4:</h3>
      <Task4 />

      <h3>Task 5:</h3>
      <p>Virtual DOM is a just a copy of real DOM which react uses internally to do changes. Then compare it with real DOM and modify only those things which is needed instead to repaint the entire DOM.</p>

      <hr />

      <h2>Medium Questions:</h2>
      
      <h3>Task 1:</h3>
      {
        nameAgeArray.map((element, index) => {
          const {name, age} = element;
          return <MediumTask1 name={name} age={age} key={index}/>
        })
      }

      <h3>Task 2:</h3>
      <MediumTask2 num={task2Number} />
      <button onClick={() => {setTask2Number(prev => prev+10)}}>Click To Change Number</button>

      <h3>Task 3:</h3>
      <MediumTask3 num={task3Num} updateNumber={updateNumber} />

      <h3>Task 4:</h3>
      <MediumTask4 />

      <h3>Task 5:</h3>
      <MediumTask5 />

      <hr /> */}

      <h2>Medium Questions:</h2>

      <h3>Task 1:</h3>
      <SemiHardTask1 />

      <h3>Task 2:</h3>
      <div>This is Parent Value: {parentValue}</div>
      <SemiHardTask2  childValue={childValue} parentValueUpdater={parentValueUpdater}/>
      <button onClick={() => {childValueUpdater()}}>Child Update From Parent</button>

      <h3>Task 3:</h3>
      <SemiHardTask3 dataToShow={'Click Me'} onClickEvent={() => {console.log("This is Clicked")}} btnColor={'red'} />



    </>
  );
}

export default App;
