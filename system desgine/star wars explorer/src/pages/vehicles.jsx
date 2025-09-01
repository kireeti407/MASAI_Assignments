import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://swapi.info/api/vehicles")
      .then((res) => {
        setVehicles(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch vehicles");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading vehicles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id || vehicle.url}
          className="card"
          onClick={() => navigate(`/vehicles/${vehicle.id || vehicle.url.split("/").filter(Boolean).pop()}`)}
        >
          <h2>{vehicle.name}</h2>
          <p><strong>Model:</strong> {vehicle.model}</p>
          <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
        </div>
      ))}
    </div>
  );
}
