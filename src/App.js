import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";
import React, { useState } from "react";
import About from "./components/About";

function App() {
  const [view, setview] = useState("home");

  const renderView = () => {
    switch (view) {
      case "home":
        return (
          <>
            {todos_list.length === 0 ? <h1>There is Nothing to Show Please Add in ToDo</h1> : null}
            {!isPending && todos_list.length !== 0 && (
              <Todos todos={todos_list} handleClick={handleDelete} />
            )}
            {todos_list.length !== 0 && isPending && (
              <h3 className="text-center">Loading......</h3>
            )}
          </>
        );
        break;
      case "addtodo":
        return <Addtodo AddHandle={handleAdd} SetView={setview} />;
        break;
      case "about":
          return <About/>;
          break;

      default:
        return (
          <>
            {todos_list.length === 0 ? (
              <div className="centered-container">
                <h1>Please Add in ToDo</h1>
              </div>
            ) : null}
            {!isPending && todos_list.length !== 0 && (
              <Todos todos={todos_list} handleClick={handleDelete} />
            )}
            {todos_list.length !== 0 && isPending && (
              <h3 className="text-center">Loading......</h3>
            )}
          </>
        );
        break;
    }
  };

  const [todos_list, settodos_list] = useState([]);
  const handleDelete = (todo) => {
    console.log(todo);
    settodos_list(todos_list.filter((td) => td.id !== todo.id));
  };

  const handleAdd = (todo) => {
    settodos_list((prevTodos) => [
      ...prevTodos,
      {
        ...todo,
        id: prevTodos.length ? prevTodos[prevTodos.length - 1].id + 1 : 1,
      },
    ]);
  };
  const [isPending, setisPending] = useState(true);

  setTimeout(() => {
    setisPending(false);
  }, 1500);
  return (
    <div className="App">
      <Navbar currentview={setview} />
      {renderView()}
    </div>
  );
}

export default App;
