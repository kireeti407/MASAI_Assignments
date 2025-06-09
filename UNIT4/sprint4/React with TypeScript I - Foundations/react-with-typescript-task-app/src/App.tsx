import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { Task } from './types/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const handleAddTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const handleToggleComplete = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Task Manager</h1>
      <AddTaskForm onAddTask={handleAddTask} />

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};
export default App;
