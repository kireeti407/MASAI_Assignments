import React, { useState } from 'react';
import API from '../api/axiosConfig';
import './AddColumnForm.css';

const AddColumnForm = ({ boardId, onColumnCreated }) => {
    const [columnName, setColumnName] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!columnName.trim()) return;

        try {
            const { data: newColumn } = await API.post(`/boards/${boardId}/columns`, { name: columnName });
            onColumnCreated(newColumn);
            setColumnName('');
            setIsFormVisible(false);
        } catch (error) {
            console.error('Failed to create column:', error);
        }
    };

    if (!isFormVisible) {
        return (
            <button onClick={() => setIsFormVisible(true)} className="add-column-button">
                + Add another column
            </button>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="add-column-form">
            <input
                type="text"
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
                placeholder="Enter column title..."
                required
            />
            <div className="add-column-actions">
                <button type="submit">Add column</button>
                <button type="button" onClick={() => setIsFormVisible(false)}>Cancel</button>
            </div>
        </form>
    );
};

export default AddColumnForm;