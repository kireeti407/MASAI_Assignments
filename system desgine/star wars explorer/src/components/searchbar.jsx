import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchBar({ category, onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    if (debounceTimeout) clearTimeout(debounceTimeout);
    const timeout = setTimeout(() => {
      const url =
        category === "people"
          ? `https://swapi.info/api/people?search=${query}`
          : `https://swapi.info/api/films?search=${query}`;
      axios.get(url).then((res) => {
        setResults(res.data|| []);
      });
    }, 500);
    setDebounceTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [query, category]);

  return (
    <div style={{ position: "relative", margin: "1rem auto", maxWidth: 400 }}>
      <input
        type="text"
        placeholder={`Search ${category === "people" ? "People" : "Films"}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
      />
      {results.length > 0 && (
        <ul style={{
          position: "absolute",
          left: 0,
          right: 0,
          background: "#fff",
          border: "1px solid #ccc",
          borderTop: "none",
          zIndex: 10,
          listStyle: "none",
          margin: 0,
          padding: 0
        }}>
          {results.map((item) => (
            <li
              key={item.id || item.url}
              style={{ padding: "0.5rem", cursor: "pointer" }}
              onClick={() => onSelect(item)}
            >
              {item.name || item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
