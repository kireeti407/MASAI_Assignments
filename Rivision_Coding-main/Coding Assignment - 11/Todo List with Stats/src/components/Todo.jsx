
import React, { useState, useMemo, useCallback } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoStats from "./TodoStats";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [todos]);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoStats stats={stats} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default Todo;
