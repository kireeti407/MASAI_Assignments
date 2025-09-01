import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PlanetDetails() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.info/api/planets/${id}`)
      .then(res => {
        setPlanet(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch planet details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading planet details...</div>;
  if (error) return <div>{error}</div>;
  if (!planet) return <div>No planet found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>{planet.name}</h1>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Diameter:</strong> {planet.diameter}</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
    </div>
  );
}
