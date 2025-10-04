import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DndContext, closestCorners } from '@dnd-kit/core';
import API from '../api/axiosConfig';
import Column from '../components/Column';
import AddColumnForm from '../components/AddColumnForm'; // Import AddColumnForm
import io from 'socket.io-client';
import './BoardPage.css';

const BoardPage = () => {
    const { boardId } = useParams();
    const [board, setBoard] = useState(null);
    const [tasks, setTasks] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const socket = io('http://localhost:5000');

        const fetchBoardData = async () => {
            try {
                const { data } = await API.get(`/boards/${boardId}`);
                setBoard(data);

                const tasksByColumn = data.columns.reduce((acc, column) => {
                    acc[column._id] = column.tasks;
                    return acc;
                }, {});
                setTasks(tasksByColumn);

                socket.emit('join-board', boardId);

            } catch (err) {
                setError('Failed to fetch board data.');
            }
            setLoading(false);
        };

        fetchBoardData();

        socket.on('task-created', (newTask) => {
            setTasks(prev => ({
                ...prev,
                [newTask.column]: [...prev[newTask.column], newTask]
            }));
        });

        socket.on('task-moved', ({ task, oldColumnId, newColumnId }) => {
            setTasks(prev => {
                const newTasks = { ...prev };
                if (newTasks[oldColumnId]) {
                    newTasks[oldColumnId] = newTasks[oldColumnId].filter(t => t._id !== task._id);
                }
                if (newTasks[newColumnId]) {
                    newTasks[newColumnId] = [...newTasks[newColumnId], task];
                } else {
                    newTasks[newColumnId] = [task];
                }
                return newTasks;
            });
        });

        socket.on('task-updated', (updatedTask) => {
            handleTaskUpdated(updatedTask);
        });

        socket.on('task-deleted', ({ taskId, columnId }) => {
            handleTaskDeleted(taskId, columnId);
        });

        socket.on('column-created', (newColumn) => {
            setBoard(prev => ({ ...prev, columns: [...prev.columns, newColumn] }));
            setTasks(prev => ({ ...prev, [newColumn._id]: [] }));
        });

        return () => {
            socket.emit('leave-board', boardId);
            socket.disconnect();
        };
    }, [boardId]);

    const handleTaskUpdated = (updatedTask) => {
        setTasks(prev => {
            const newTasks = { ...prev };
            const columnTasks = newTasks[updatedTask.column];
            if (columnTasks) {
                const taskIndex = columnTasks.findIndex(t => t._id === updatedTask._id);
                if (taskIndex > -1) {
                    columnTasks[taskIndex] = updatedTask;
                }
            }
            return newTasks;
        });
    };

    const handleTaskDeleted = (taskId, columnId) => {
        setTasks(prev => {
            const newTasks = { ...prev };
            if (newTasks[columnId]) {
                newTasks[columnId] = newTasks[columnId].filter(t => t._id !== taskId);
            }
            return newTasks;
        });
    };

    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const taskId = active.id;
        const newColumnId = over.id;
        const oldColumnId = active.data.current.columnId;

        if (oldColumnId === newColumnId) return;

        const originalTasks = { ...tasks };

        setTasks(prev => {
            const newTasks = { ...prev };
            const taskToMove = newTasks[oldColumnId].find(t => t._id === taskId);
            newTasks[oldColumnId] = newTasks[oldColumnId].filter(t => t._id !== taskId);
            newTasks[newColumnId] = [...newTasks[newColumnId], taskToMove];
            return newTasks;
        });

        try {
            await API.put(`/boards/${boardId}/tasks/${taskId}/move`, { newColumnId });
        } catch (err) {
            setError('Failed to move task. Reverting changes.');
            setTasks(originalTasks);
        }
    };

    const handleAddColumn = (newColumn) => {
        setBoard(prev => ({ ...prev, columns: [...prev.columns, newColumn] }));
        setTasks(prev => ({ ...prev, [newColumn._id]: [] }));
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
                            setTasks={setTasks}
                            onTaskUpdated={handleTaskUpdated}
                            onTaskDeleted={handleTaskDeleted}
                        />
                    ))}
                    <AddColumnForm boardId={boardId} onColumnCreated={handleAddColumn} />
                </div>
            </div>
        </DndContext>
    );
};

export default BoardPage;