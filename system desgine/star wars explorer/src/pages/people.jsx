import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://swapi.info/api/people")
      .then((res) => {
        setPeople(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch people");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading people...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
      {people.map((person) => (
        <div
          key={person.id || person.url}
          className="card"
          onClick={() => navigate(`/people/${person.id || person.url.split("/").filter(Boolean).pop()}`)}
        >
          <h2>{person.name}</h2>
          <p><strong>Gender:</strong> {person.gender}</p>
          <p><strong>Birth Year:</strong> {person.birth_year}</p>
        </div>
      ))}
    </div>
  );
}
