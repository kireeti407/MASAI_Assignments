import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOnline) {
      fetchData();
    }
  }, [isOnline]);

  return (
    <div className="App">
      <h1>API Data Display</h1>
      {isOnline ? (
        loading ? (
          <p>Loading data...</p>
        ) : (
          <div className="data-container">
            <h2>Posts</h2>
            <ul>
              {data.map(post => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      ) : (
        <div className="offline-message">
          <span className="red-icon">🔴</span>
          <p>Currently you are offline. Connect to a network to see the data.</p>
        </div>
      )}
    </div>
  )
}

export default App
