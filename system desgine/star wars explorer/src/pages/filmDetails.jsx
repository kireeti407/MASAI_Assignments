import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function FilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.info/api/films/${id}`)
      .then(res => {
        setFilm(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch film details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading film details...</div>;
  if (error) return <div>{error}</div>;
  if (!film) return <div>No film found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>{film.title}</h1>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Producer:</strong> {film.producer}</p>
      <p><strong>Release Date:</strong> {film.release_date}</p>
      <p><strong>Opening Crawl:</strong></p>
      <pre style={{ whiteSpace: "pre-wrap", background: "#f9f9f9", padding: 10 }}>{film.opening_crawl}</pre>
    </div>
  );
}
