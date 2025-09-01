import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://swapi.info/api/starships")
      .then((res) => {
        setStarships(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch starships");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading starships...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
      {starships.map((ship) => (
        <div
          key={ship.id || ship.url}
          className="card"
          onClick={() => navigate(`/starships/${ship.id || ship.url.split("/").filter(Boolean).pop()}`)}
        >
          <h2>{ship.name}</h2>
          <p><strong>Model:</strong> {ship.model}</p>
          <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
        </div>
      ))}
    </div>
  );
}
