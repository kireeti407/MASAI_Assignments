import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import './TaskModal.css';

const TaskModal = ({ task, columnId, boardId, onClose, onTaskUpdated, onTaskDeleted }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    useEffect(() => {
        setEditedTask({ ...task });
    }, [task]);

    const handleUpdate = async () => {
        try {
            const { data: updatedTask } = await API.put(`/boards/${boardId}/tasks/${task._id}`, editedTask);
            onTaskUpdated(updatedTask);
            setIsEditing(false);
            onClose();
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await API.delete(`/boards/${boardId}/tasks/${task._id}`);
                onTaskDeleted(task._id, columnId);
                onClose();
            } catch (error) {
                console.error('Failed to delete task:', error);
            }
        }
    };

    return (
        <div className="task-modal-backdrop" onClick={onClose}>
            <div className="task-modal-content" onClick={e => e.stopPropagation()}>
                {isEditing ? (
                    <div className="task-modal-header">
                        <input 
                            type="text" 
                            value={editedTask.title}
                            onChange={e => setEditedTask({ ...editedTask, title: e.target.value })}
                        />
                    </div>
                ) : (
                    <div className="task-modal-header">
                        <h2>{task.title}</h2>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                )}
                
                <div className="task-modal-body">
                    {isEditing ? (
                        <textarea 
                            value={editedTask.description}
                            onChange={e => setEditedTask({ ...editedTask, description: e.target.value })}
                        />
                    ) : (
                        <p>{task.description}</p>
                    )}
                </div>

                <div className="task-modal-footer">
                    {isEditing ? (
                        <div>
                            <button onClick={handleUpdate}>Save</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    ) : (
                        <button onClick={handleDelete} className="delete-button">Delete Task</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskModal;