import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Species() {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://swapi.info/api/species")
      .then((res) => {
        setSpecies(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch species");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading species...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
      {species.map((sp) => (
        <div
          key={sp.id || sp.url}
          className="card"
          onClick={() => navigate(`/species/${sp.id || sp.url.split("/").filter(Boolean).pop()}`)}
        >
          <h2>{sp.name}</h2>
          <p><strong>Classification:</strong> {sp.classification}</p>
          <p><strong>Language:</strong> {sp.language}</p>
        </div>
      ))}
    </div>
  );
}
