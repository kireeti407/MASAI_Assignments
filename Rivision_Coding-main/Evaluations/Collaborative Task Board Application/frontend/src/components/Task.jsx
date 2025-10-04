import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import TaskModal from './TaskModal';
import './Task.css';

const Task = ({ task, columnId, boardId, onTaskUpdated, onTaskDeleted }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition 
    } = useSortable({ 
        id: task._id,
        data: { columnId } 
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div 
                ref={setNodeRef} 
                style={style} 
                {...attributes} 
                {...listeners}
                className="task-card"
                onClick={openModal}
            >
                <h4 className="task-title">{task.title}</h4>
                <p className="task-description">{task.description}</p>
            </div>
            {isModalOpen && (
                <TaskModal 
                    task={task}
                    columnId={columnId}
                    boardId={boardId}
                    onClose={closeModal}
                    onTaskUpdated={onTaskUpdated}
                    onTaskDeleted={onTaskDeleted}
                />
            )}
        </>
    );
};

export default Task;
