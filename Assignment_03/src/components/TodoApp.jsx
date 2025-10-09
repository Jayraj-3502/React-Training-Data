import { useState } from "react";

export default function TodoApp() {
  //   const todoStructure = {
  //     title: '',
  //     description: '',
  //     priority: '',
  //     ide: '',
  //   }

  const [todoData, setTodoData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(title, description, priority);
    setTodoData((prev) => [
      ...prev,
      {
        title: title,
        description: description,
        priority: priority,
        ide: Date.now(),
        editing: false,
        status: "todo",
      },
    ]);
    resetDataFields();
  }

  function resetDataFields() {
    setTitle("");
    setDescription("");
    setPriority("Low");
  }

  function removeTodoItem(removeIde) {
    setTodoData(
      todoData.filter((item) => {
        const { ide } = item;
        if (removeIde !== ide) {
          return item;
        }
      })
    );
  }

  //   function titleEditing(editedItemIde, newTitle) {
  //     setTodoData((prev) =>
  //       prev.map((item) => {
  //         const { ide } = item;
  //         if (editedItemIde === ide) {
  //           return { ...item, title: newTitle };
  //         } else {
  //           return item;
  //         }
  //       })
  //     );
  //   }

  //   function descriptionEditing(editedItemIde, newDescription) {
  //     setTodoData((prev) =>
  //       prev.map((item) => {
  //         const { ide } = item;
  //         if (editedItemIde === ide) {
  //           return { ...item, description: newDescription };
  //         } else {
  //           return item;
  //         }
  //       })
  //     );
  //   }

  //   function priorityEditing(editedItemIde, newPriority) {
  //     setTodoData((prev) =>
  //       prev.map((item) => {
  //         const { ide } = item;
  //         if (editedItemIde === ide) {
  //           return { ...item, priority: newPriority };
  //         } else {
  //           return item;
  //         }
  //       })
  //     );
  //   }

  function commonFunctoinForTDPUpdate(editedItemIde, newData, fieldName) {
    setTodoData((prev) =>
      prev.map((item) => {
        const { ide } = item;
        if (editedItemIde === ide) {
          return { ...item, [fieldName]: newData };
        } else {
          return item;
        }
      })
    );
  }

  function editTheEditing(editItemIde) {
    setTodoData((prev) =>
      prev.map((item) => {
        const { ide, editing } = item;
        if (editItemIde === ide) {
          return { ...item, editing: !editing };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="p-5">
      <div>
        <form
          action=""
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          className="flex flex-col gap-2"
        >
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter Title"
              required
              className="border border-black rounded-full px-3 py-1.5"
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter Description"
              required
              className="border border-black rounded-full px-3 py-1.5"
            />
          </div>
          <div>
            priority:
            <select
              name="todoTaskPriority"
              id="todoTaskPriority"
              onChange={(event) => {
                setPriority(event.target.value);
              }}
              className="border border-black rounded-full px-3 py-1.5 ml-3"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button className="border border-black rounded-full px-3 py-1.5 w-fit">
            Add Todo
          </button>
        </form>
      </div>
      <div className="flex gap-2 flex-wrap mt-10">
        {todoData.map((item) => {
          const { title, description, priority, ide, editing } = item;

          return (
            <div
              key={ide}
              className="border border-black p-3 w-fit h-fit rounded-[10px]"
            >
              <div>
                <div>
                  <span>Title: </span>
                  <span>
                    <input
                      name="title"
                      type="text"
                      value={title}
                      onChange={(event) => {
                        commonFunctoinForTDPUpdate(
                          ide,
                          event.target.value,
                          event.target.name
                        );
                      }}
                      disabled={!editing}
                    />
                  </span>
                </div>
                <div>
                  <span>Descriptoin: </span>
                  <span>
                    <input
                      name="description"
                      type="text"
                      value={description}
                      disabled={!editing}
                      onChange={(event) => {
                        commonFunctoinForTDPUpdate(
                          ide,
                          event.target.value,
                          event.target.name
                        );
                      }}
                    />
                  </span>
                </div>
                <div>
                  Priority:
                  <select
                    name="priority"
                    id={ide}
                    onChange={(event) => {
                      commonFunctoinForTDPUpdate(
                        ide,
                        event.target.value,
                        event.target.name
                      );
                    }}
                    disabled={!editing}
                    value={priority}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  className="border border-black px-4 py-2 rounded-full"
                  onClick={() => {
                    removeTodoItem(ide);
                  }}
                >
                  Delete
                </button>
                <button
                  className="border border-black px-4 py-2 rounded-full"
                  onClick={() => {
                    editTheEditing(ide);
                  }}
                >
                  {editing ? "Done" : "Edit"}
                </button>
              </div>
            </div>
          );
        })}
        {/* <div className="border border-black rounded-xl p-3 w-[30%] text-center">
          <div>
            <h1>Todo</h1>
          </div>
          <div>{}</div>
        </div>
        <div className="border border-black rounded-xl p-3 w-[30%] text-center">
          <div>
            <h1>Inprogress</h1>
          </div>
          <div>{}</div>
        </div>
        <div className="border border-black rounded-xl p-3 w-[30%] text-center">
          <div>
            <h1>Done</h1>
          </div>
          <div>{}</div>
        </div> */}
      </div>
    </div>
  );
}
