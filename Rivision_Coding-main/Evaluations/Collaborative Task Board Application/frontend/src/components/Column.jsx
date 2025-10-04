import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Task from './Task'; // This component doesn't exist yet
import './Column.css';

const Column = ({ column, tasks }) => {
    const { setNodeRef } = useDroppable({
        id: column._id,
    });

    return (
        <div ref={setNodeRef} className="column">
            <h3 className="column-title">{column.name}</h3>
            <SortableContext 
                id={column._id}
                items={tasks.map(t => t._id)} 
                strategy={verticalListSortingStrategy}
            >
                <div className="task-list">
                    {tasks.map(task => (
                        <Task key={task._id} task={task} columnId={column._id} />
                    ))}
                </div>
            </SortableContext>
        </div>
    );
};

export default Column;
