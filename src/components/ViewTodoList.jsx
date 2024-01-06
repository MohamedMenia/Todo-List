/* eslint-disable react/prop-types */
import { useState } from "react";
import Task from "./Task";

export default function ViewTodoList({
  todoList,
  checkTodo,
  handelDelete,
  handelEdit,
}) {
  const [fillter, setFilter] = useState("All");

  return (
    <div className="grid w-full">
      <select
        className=" justify-self-end mb-4 text-slate-900 border-4 border-slate-900 focus:outline-none focus:border- w-4/3  "
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="Incompleted">Incompleted Tasks</option>
        <option value="Completed">Completed Tasks</option>
      </select>
      {todoList.map((task) => {
        if (
          fillter == "All" ||
          (fillter == "Completed" && task.checked) ||
          (fillter == "Incompleted" && !task.checked)
        )
          return (
            <Task
              key={task.id}
              task={task}
              checkTodo={checkTodo}
              handelDelete={handelDelete}
              handelEdit={handelEdit}
            />
          );
      })}
    </div>
  );
}
