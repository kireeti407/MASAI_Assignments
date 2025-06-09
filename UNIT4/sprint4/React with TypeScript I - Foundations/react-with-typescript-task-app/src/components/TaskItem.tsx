import React from 'react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
      <span>{task.description} - <strong>{task.priority}</strong></span>
    </div>
  );
};

export default TaskItem;
