import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PersonDetails() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.info/api/people/${id}`)
      .then(res => {
        setPerson(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch person details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading person details...</div>;
  if (error) return <div>{error}</div>;
  if (!person) return <div>No person found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>{person.name}</h1>
      <p><strong>Gender:</strong> {person.gender}</p>
      <p><strong>Birth Year:</strong> {person.birth_year}</p>
      <p><strong>Height:</strong> {person.height}</p>
      <p><strong>Mass:</strong> {person.mass}</p>
      <p><strong>Hair Color:</strong> {person.hair_color}</p>
      <p><strong>Skin Color:</strong> {person.skin_color}</p>
      <p><strong>Eye Color:</strong> {person.eye_color}</p>
    </div>
  );
}
