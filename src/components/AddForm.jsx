/* eslint-disable react/prop-types */
export default function AddForm({ pushTodo, todo, setToDo }) {
  return (
    <form
      className=" grid grid-flow-col grid-col-4  w-full h-10 "
      onSubmit={(e) => pushTodo(e)}
    >
      <input
        type="text"
        className="col-span-3 p-2 bg-gray-400   text-slate-900 border-4 border-slate-900 placeholder-gray-900 focus:bg-gray-200  focus:outline-none"
        placeholder="What is the new task?"
        value={todo}
        onChange={(e) => {
          setToDo(e.target.value);
        }}
        required
      />
      <button className="grid-cols-1 bg-slate-900 h-full border-4 border-slate-900 text-2xl hover:bg-emerald-800 hover:border-emerald-800 transition-colors ">
        Add
      </button>
    </form>
  );
}
