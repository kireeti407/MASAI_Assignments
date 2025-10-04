import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DndContext, closestCorners } from '@dnd-kit/core';
import API from '../api/axiosConfig';
import Column from '../components/Column'; // This component doesn't exist yet
import io from 'socket.io-client';
import './BoardPage.css';

const BoardPage = () => {
    const { boardId } = useParams();
    const [board, setBoard] = useState(null);
    const [tasks, setTasks] = useState({}); // { columnId: [tasks] }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const socket = io('http://localhost:5000');

        const fetchBoardData = async () => {
            try {
                const { data } = await API.get(`/boards/${boardId}`);
                setBoard(data);

                // Initialize tasks state from board data
                const tasksByColumn = data.columns.reduce((acc, column) => {
                    acc[column._id] = column.tasks;
                    return acc;
                }, {});
                setTasks(tasksByColumn);

                // Join board room for real-time updates
                socket.emit('join-board', boardId);

            } catch (err) {
                setError('Failed to fetch board data.');
            }
            setLoading(false);
        };

        fetchBoardData();

        // Socket event listeners
        socket.on('task-created', (newTask) => {
            setTasks(prev => ({
                ...prev,
                [newTask.column]: [...prev[newTask.column], newTask]
            }));
        });

        socket.on('task-moved', ({ task, oldColumnId, newColumnId }) => {
            setTasks(prev => {
                const newTasks = { ...prev };
                newTasks[oldColumnId] = newTasks[oldColumnId].filter(t => t._id !== task._id);
                newTasks[newColumnId] = [...newTasks[newColumnId], task];
                return newTasks;
            });
        });

        return () => {
            socket.emit('leave-board', boardId);
            socket.disconnect();
        };
    }, [boardId]);

    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const taskId = active.id;
        const newColumnId = over.id;
        const oldColumnId = active.data.current.columnId;

        if (oldColumnId === newColumnId) return;

        // Optimistic UI update
        setTasks(prev => {
            const newTasks = { ...prev };
            const taskToMove = newTasks[oldColumnId].find(t => t._id === taskId);
            newTasks[oldColumnId] = newTasks[oldColumnId].filter(t => t._id !== taskId);
            newTasks[newColumnId] = [...newTasks[newColumnId], taskToMove];
            return newTasks;
        });

        // API call to update backend
        try {
            await API.put(`/boards/${boardId}/tasks/${taskId}/move`, { newColumnId });
        } catch (err) {
            setError('Failed to move task. Reverting changes.');
            // Revert UI on error
        }
    };

    if (loading) return <div>Loading board...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <div className="board-page-container">
                <h1 className="board-title">{board?.name}</h1>
                <div className="columns-container">
                    {board?.columns.map(column => (
                        <Column 
                            key={column._id} 
                            column={column} 
                            tasks={tasks[column._id] || []} 
                        />
                    ))}
                </div>
            </div>
        </DndContext>
    );
};

export default BoardPage;
