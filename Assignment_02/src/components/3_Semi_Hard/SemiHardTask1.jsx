import { useState } from "react";

export default function SemiHardTask1() {
  const [todoContext, setTodoContext] = useState("");
  const [todoList, setTodoList] = useState([]);

  function todoTaskAdder() {
    if (todoContext) {
      setTodoList((prev) => [...prev, todoItemWithID(todoContext)]);
    }

    setTodoContext("");
  }

  function todoItemWithID(todo) {
    const Id = Date.now();
    return { data: todo, ide: `${todo}${Id}` };
  }

  function todoTaskRemover(todoIde) {
    setTodoList(
      todoList.filter((todoItem) => {
        const { ide } = todoItem;
        return ide != todoIde;
      })
    );
  }

  function todoTaskCompliter() {}

  return (
    <div>
      <div className="mb-3 border border-black w-fit rounded-full mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Enter Task"
          className="outline-none px-3 py-2 rounded-l-full border-r-0"
          onChange={(event) => setTodoContext(event.target.value)}
          value={todoContext}
          required
        />
        <button
          className="px-3 py-2 rounded-r-full bg-blue-700 text-white"
          onClick={() => {
            todoTaskAdder();
          }}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col gap-2 align-center h-fit max-h-[300px] overflow-auto">
        {todoList.map((listItem, index) => (
          <div
            className="flex justify-center border border-black w-fit rounded-full mx-auto"
            key={`${index}${listItem}`}
          >
            <div className="w-[200px] py-2 px-4 rounded-l-full border-r-0">
              {listItem.data}
            </div>
            <button
              className="border-none py-2 px-4 bg-red-500 rounded-r-full text-white"
              onClick={() => {
                todoTaskRemover(listItem.ide);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
