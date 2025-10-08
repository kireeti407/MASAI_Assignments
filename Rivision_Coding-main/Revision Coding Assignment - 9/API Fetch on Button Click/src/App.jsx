import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [numJokes, setNumJokes] = useState(1);
  const fetchCounter = useRef(0);

  const fetchJoke = async (count) => {
    const currentFetch = ++fetchCounter.current;
    setLoading(true);
    setError(null);

    try {
      const jokes = [];
      for (let i = 0; i < count; i++) {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        jokes.push(data);
      }

      if (currentFetch === fetchCounter.current) {
        setJoke(jokes[0]);
        setHistory(prevHistory => [...jokes, ...prevHistory].slice(0, 5));
      }
    } catch (error) {
      if (currentFetch === fetchCounter.current) {
        setError(error.message);
      }
    } finally {
      if (currentFetch === fetchCounter.current) {
        setLoading(false);
      }
    }
  };

  const longestSetupIndex = history.reduce((longestIndex, currentJoke, currentIndex, arr) => {
    if (currentJoke.setup.length > (arr[longestIndex]?.setup.length || 0)) {
      return currentIndex;
    }
    return longestIndex;
  }, -1);

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <div className="joke-container">
        <button onClick={() => fetchJoke(1)} disabled={loading}>
          Get Random Joke
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {joke && !loading && !error && (
          <div className="joke">
            <p><strong>Setup:</strong> {joke.setup}</p>
            <p><strong>Punchline:</strong> {joke.punchline}</p>
          </div>
        )}
      </div>

      <div className="multiple-jokes">
        <input
          type="number"
          value={numJokes}
          onChange={(e) => setNumJokes(Math.max(1, Math.min(5, Number(e.target.value))))}
          min="1"
          max="5"
        />
        <button onClick={() => fetchJoke(numJokes)} disabled={loading}>
          Fetch Multiple Jokes
        </button>
      </div>

      <div className="history-container">
        <h2>History</h2>
        <button onClick={() => setHistory([])} disabled={history.length === 0}>
          Clear History
        </button>
        <ul>
          {history.map((histJoke, index) => (
            <li key={histJoke.id} style={{ backgroundColor: index === longestSetupIndex ? 'lightblue' : 'transparent' }}>
              <p><strong>Setup:</strong> {histJoke.setup}</p>
              <p><strong>Punchline:</strong> {histJoke.punchline}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;