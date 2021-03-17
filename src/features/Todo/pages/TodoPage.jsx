import React, { useState } from "react";
import TodoForm from "../components/TodoForm/TodoForm.jsx";
import TodoList from "../components/TodoList/TodoList.jsx";

const TodoPage = () => {
  let initTodoList = [
    {
      id: 1,
      title: "eat",
    },
    {
      id: 2,
      title: "sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];
  const [todo, setTodoList] = useState(initTodoList);
  const handleTodoSubmit = (values) => {
    const newTodo = {
      id: todo.length + 1,
      title: values.title,
    };
    todo.push(newTodo);
    const newTodoList = [...todo];
    console.log(newTodo.id);
    setTodoList(newTodoList);
  };
  return (
    <>
      <TodoForm onSubmit={handleTodoSubmit} />
      <TodoList todoList={todo} />
    </>
  );
};

export default TodoPage;
