import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './Task.css';

const Task = ({ task, columnId }) => {
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition 
    } = useSortable({ 
        id: task._id,
        data: { columnId } // Pass columnId for drag-and-drop logic
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div 
            ref={setNodeRef} 
            style={style} 
            {...attributes} 
            {...listeners}
            className="task-card"
        >
            <h4 className="task-title">{task.title}</h4>
            <p className="task-description">{task.description}</p>
            {/* Add more details like assignee and due date later */}
        </div>
    );
};

export default Task;
