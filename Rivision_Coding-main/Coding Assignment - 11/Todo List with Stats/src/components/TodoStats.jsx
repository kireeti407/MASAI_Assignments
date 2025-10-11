
import React from "react";

function TodoStats({ stats }) {
  return (
    <div className="todo-stats">
      <span>Total: {stats.total}</span>
      <span>Completed: {stats.completed}</span>
      <span>Pending: {stats.pending}</span>
    </div>
  );
}

export default React.memo(TodoStats);
