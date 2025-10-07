import { useState } from "react";

import {SemiHardTask1, SemiHardTask2, SemiHardTask3, MediumTask1, MediumTask2, MediumTask3, MediumTask4, MediumTask5, Task1, Task2, Task3, Task4} from './components/export';

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
    <div>
      <h1 className="text-5xl font-bold text-blue-500">This is Main App.</h1>

      <div>
        <h2 className="mb-8 text-3xl underline">Easy Questions:</h2>

        <div className="flex flex-col gap-5">
          <div>
            <h3>Task 1:</h3>
            <Task1 />
          </div>

          <div>
            <h3>Task 2:</h3>
            {
              nameArray.map((name, index) => {
                return <Task2 name={name} key={index}/>
                // console.log(name);
              })
            }
          </div>

          <div>
            <h3>Task 3:</h3>
            <Task3 />
          </div>

          <div>
            <h3>Task 4:</h3>
            <Task4 />
          </div>

          <div>
            <h3>Task 5:</h3>
            W<p>Virtual DOM is a just a copy of real DOM which react uses internally to do changes. Then compare it with real DOM and modify only those things which is needed instead to repaint the entire DOM.</p>
          </div>
        </div>
      </div>
      

      <hr className="my-10" />

      <div>
        <h2 className="mb-8 text-3xl underline">Semi Hard Questions:</h2>
        <div className="flex flex-col gap-5">
          <div>
            <h3>Task 1:</h3>
            {
              nameAgeArray.map((element, index) => {
                const {name, age} = element;
                return <MediumTask1 name={name} age={age} key={index}/>
              })
            }
          </div>
          <div>
            <h3>Task 2:</h3>
            <MediumTask2 num={task2Number} />
            <button onClick={() => {setTask2Number(prev => prev+10)}}>Click To Change Number</button>
          </div>
          <div>
            <h3>Task 3:</h3>
            <MediumTask3 num={task3Num} updateNumber={updateNumber} />
          </div>
          <div>
            <h3>Task 4:</h3>
            <MediumTask4 />
          </div>
          <div>
            <h3>Task 5:</h3>
            <MediumTask5 />
          </div>
        </div>
      </div>

      <hr className="my-10"/>

      <div>
        <h2>Medium Questions:</h2>

        <div>
          <div>
            <h3>Task 1:</h3>
            <SemiHardTask1 />
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
      

      

      

      <h3>Task 3:</h3>
      <SemiHardTask3 dataToShow={'Click Me'} onClickEvent={() => {console.log("This is Clicked")}} btnColor={'red'} />



    </div>
  );
}

export default App;
