import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSearch(title);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search movie by title..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
