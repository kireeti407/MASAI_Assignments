
import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <div>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? "Undo" : "Mark as Done"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default React.memo(TodoItem);
