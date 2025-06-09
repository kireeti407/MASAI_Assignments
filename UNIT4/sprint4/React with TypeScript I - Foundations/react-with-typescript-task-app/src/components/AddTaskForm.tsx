import React, { useState } from 'react';
import { Task, Priority } from '../types/Task';

interface AddTaskFormProps {
  onAddTask: (task: Task) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<Priority>(Priority.LOW);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      description,
      completed: false,
      priority,
    };
    onAddTask(newTask);
    setDescription('');
    setPriority(Priority.LOW);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <select value={priority} onChange={e => setPriority(e.target.value as Priority)}>
        <option value={Priority.LOW}>Low</option>
        <option value={Priority.MEDIUM}>Medium</option>
        <option value={Priority.HIGH}>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
