/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditTask({ task, handelEdit, setShowEditForm }) {
  const [todoEdit, setTodoEdit] = useState(task.todo);
  return (
    <div className=" grid  justify-items-center   items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50  backdrop-blur-sm  ">
      <input
        value={todoEdit}
        className=" text-slate-900 focus:outline-none w-2/3 p-2 border-4 border-stone-900"
        onChange={(e) => {
          setTodoEdit(e.target.value);
        }}
      />
      <div className="flex justify-around  w-full">
        <button
          className="text-xl  bg-slate-900 p-3 rounded"
          onClick={() => {
            handelEdit(task.id, todoEdit);
            setShowEditForm(false);
          }}
        >
          Confirm
        </button>
        <button
          className="text-xl  bg-rose-900 p-3 rounded"
          onClick={() => setShowEditForm(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
