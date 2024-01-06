import { useState } from "react";
import uuid from "react-uuid";
import AddForm from "./components/AddForm";
import ViewTodoList from "./components/ViewTodoList";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setToDo] = useState("");
  const pushTodo = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: uuid(), todo, checked: false }]);
    setToDo("");
  };
  const checkTodo = (id) => {
    const newTodoList = todoList.map((index) => {
      if (index.id == id) {
        index.checked = !index.checked;
      }
      return index;
    });
    setTodoList(newTodoList);
  };
  const handelDelete = (id) => {
    const newTodoList = todoList.filter((index) => {
      if (index.id == id) {
        return false;
      }
      return true;
    });
    setTodoList(newTodoList);
  };
  const handelEdit = (id, todoEdit) => {
    const newTodoList = todoList.map((index) => {
      if (index.id == id) {
        index.todo = todoEdit;
      }
      return index;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className=" grid justify-items-center mt-20 bg-gray-600 p-10 drop-shadow-2xl w-5/6 lg:w-2/3 xl:w-1/2 space-y-10 mx-auto font-mono text-neutral-300 rounded-xl">
      <h1 className=" text-5xl font-bold ">Todo List </h1>
      <AddForm pushTodo={pushTodo} todo={todo} setToDo={setToDo} />
      <ViewTodoList todoList={todoList} checkTodo={checkTodo} handelDelete={handelDelete}  handelEdit={handelEdit}/>
    </div>
  );
}
export default App;
