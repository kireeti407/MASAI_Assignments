import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function StarshipDetails() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.info/api/starships/${id}`)
      .then(res => {
        setStarship(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch starship details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading starship details...</div>;
  if (error) return <div>{error}</div>;
  if (!starship) return <div>No starship found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>{starship.name}</h1>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
      <p><strong>Length:</strong> {starship.length}</p>
      <p><strong>Starship Class:</strong> {starship.starship_class}</p>
    </div>
  );
}
