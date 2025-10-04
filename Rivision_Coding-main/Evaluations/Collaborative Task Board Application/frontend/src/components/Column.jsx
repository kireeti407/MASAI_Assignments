import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import Task from './Task';
import './Column.css';
import API from '../api/axiosConfig';
import { useParams } from 'react-router-dom';

const Column = ({ column, tasks, setTasks, onTaskUpdated, onTaskDeleted }) => {
    const { boardId } = useParams();
    const { setNodeRef } = useDroppable({
        id: column._id,
    });
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;

        try {
            const { data: newTask } = await API.post(`/boards/${boardId}/tasks`, {
                title: newTaskTitle,
                description: newTaskDescription,
                columnId: column._id,
            });

            setTasks(prev => ({
                ...prev,
                [column._id]: [...prev[column._id], newTask],
            }));

            setNewTaskTitle('');
            setNewTaskDescription('');
            setShowAddTaskForm(false);
        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };

    return (
        <div ref={setNodeRef} className="column">
            <h3 className="column-title">{column.name}</h3>
            <div className="task-list">
                {tasks.map(task => (
                    <Task 
                        key={task._id} 
                        task={task} 
                        columnId={column._id} 
                        boardId={boardId} // Pass boardId to Task
                        onTaskUpdated={onTaskUpdated} 
                        onTaskDeleted={onTaskDeleted} 
                    />
                ))}
            </div>
            <div className="add-task-section">
                {showAddTaskForm ? (
                    <form onSubmit={handleAddTask} className="add-task-form">
                        <input
                            type="text"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            placeholder="Task title"
                            required
                        />
                        <textarea
                            value={newTaskDescription}
                            onChange={(e) => setNewTaskDescription(e.target.value)}
                            placeholder="Task description"
                        />
                        <div className="add-task-actions">
                            <button type="submit">Add Task</button>
                            <button type="button" onClick={() => setShowAddTaskForm(false)}>Cancel</button>
                        </div>
                    </form>
                ) : (
                    <button onClick={() => setShowAddTaskForm(true)} className="add-task-button">
                        + Add a task
                    </button>
                )}
            </div>
        </div>
    );
};

export default Column;