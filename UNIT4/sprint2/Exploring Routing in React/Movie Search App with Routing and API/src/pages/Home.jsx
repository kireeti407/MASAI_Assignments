import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const API_KEY = "a728b74f";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (title) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setError(res.data.Error);
        setMovies([]);
      }
    } catch {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Movie Search</h2>
      <SearchBar onSearch={searchMovies} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              {movie.Title} ({movie.Year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
