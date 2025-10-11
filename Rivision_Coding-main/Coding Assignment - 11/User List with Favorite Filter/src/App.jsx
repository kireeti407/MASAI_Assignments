import { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const toggleFavorite = useCallback((userId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(userId)
        ? prevFavorites.filter((id) => id !== userId)
        : [...prevFavorites, userId]
    );
  }, []);

  const filteredUsers = useMemo(() => {
    if (showOnlyFavorites) {
      return users.filter((user) => favorites.includes(user.id));
    }
    return users;
  }, [showOnlyFavorites, users, favorites]);

  return (
    <div className="App">
      <h1>User List</h1>
      <div className="filter-container">
        <label>
          <input
            type="checkbox"
            checked={showOnlyFavorites}
            onChange={() => setShowOnlyFavorites(!showOnlyFavorites)}
          />
          Show only favorites
        </label>
      </div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
            <button onClick={() => toggleFavorite(user.id)}>
              {favorites.includes(user.id) ? 'Unfavorite' : 'Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;