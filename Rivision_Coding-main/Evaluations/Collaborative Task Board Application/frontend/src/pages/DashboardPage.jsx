import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../api/axiosConfig';
import './DashboardPage.css';

const DashboardPage = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isCreating, setIsCreating] = useState(false);
    const [newBoardName, setNewBoardName] = useState('');

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const { data } = await API.get('/boards');
                setBoards(data);
            } catch (err) {
                setError('Failed to fetch boards.');
            }
            setLoading(false);
        };

        fetchBoards();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleCreateBoard = async (e) => {
        e.preventDefault();
        if (!newBoardName.trim()) {
            setError('Board name is required.');
            return;
        }
        try {
            setError('');
            const { data } = await API.post('/boards', { name: newBoardName });
            setBoards(prevBoards => [...prevBoards, data]);
            setNewBoardName('');
            setIsCreating(false);
        } catch (err) {
            setError('Failed to create board. Please try again.');
            console.error(err);
        }
    };

    if (loading) {
        return <div>Loading boards...</div>;
    }

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Welcome, {user?.name}</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </header>
            
            <main className="dashboard-main">
                <h2>Your Boards</h2>
                {error && <p className="error">{error}</p>}
                {user?.role === 'Admin' && (
                    <div className="create-board-section">
                        <button 
                            onClick={() => setIsCreating(!isCreating)} 
                            className="create-board-button"
                        >
                            {isCreating ? 'Cancel' : 'Create New Board'}
                        </button>
                        {isCreating && (
                            <form onSubmit={handleCreateBoard} className="create-board-form">
                                <input
                                    type="text"
                                    value={newBoardName}
                                    onChange={(e) => setNewBoardName(e.target.value)}
                                    placeholder="New board name"
                                    required
                                />
                                <button type="submit">Create</button>
                            </form>
                        )}
                    </div>
                )}
                <div className="boards-grid">
                    {boards.length > 0 ? (
                        boards.map(board => (
                            <Link to={`/board/${board._id}`} key={board._id} className="board-card">
                                <h3>{board.name}</h3>
                                <p>{board.description || 'No description'}</p>
                            </Link>
                        ))
                    ) : (
                        <p>You are not a member of any boards yet.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;

