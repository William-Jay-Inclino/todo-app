import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
    toast.success("Todo added!");
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    toast.error("Todo removed!");
  };

  const updateTodo = (index: number, newTodo: string) => {
    setTodos(todos.map((todo, i) => (i === index ? newTodo : todo)));
    toast.info("Todo updated!");
  };

  return (
    <div className="d-flex justify-content-center align-items-start min-vh-100 pt-5">
      <div className="container text-center">
        <h1 className="mb-4">Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <br />
        <br />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
