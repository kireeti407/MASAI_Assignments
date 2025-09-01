import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SpeciesDetails() {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.info/api/species/${id}`)
      .then(res => {
        setSpecies(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch species details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading species details...</div>;
  if (error) return <div>{error}</div>;
  if (!species) return <div>No species found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>{species.name}</h1>
      <p><strong>Classification:</strong> {species.classification}</p>
      <p><strong>Language:</strong> {species.language}</p>
      <p><strong>Average Lifespan:</strong> {species.average_lifespan}</p>
      <p><strong>Skin Colors:</strong> {species.skin_colors}</p>
      <p><strong>Eye Colors:</strong> {species.eye_colors}</p>
    </div>
  );
}
