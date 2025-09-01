import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://swapi.info/api/planets")
      .then((res) => {
        setPlanets(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch planets");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading planets...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
      {planets.map((planet) => (
        <div
          key={planet.id || planet.url}
          className="card"
          onClick={() => navigate(`/planets/${planet.id || planet.url.split("/").filter(Boolean).pop()}`)}
        >
          <h2>{planet.name}</h2>
          <p><strong>Climate:</strong> {planet.climate}</p>
          <p><strong>Population:</strong> {planet.population}</p>
        </div>
      ))}
    </div>
  );
}
