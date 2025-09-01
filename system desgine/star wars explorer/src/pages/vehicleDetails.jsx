import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function VehicleDetails() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.info/api/vehicles/${id}`)
      .then(res => {
        setVehicle(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch vehicle details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading vehicle details...</div>;
  if (error) return <div>{error}</div>;
  if (!vehicle) return <div>No vehicle found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>{vehicle.name}</h1>
      <p><strong>Model:</strong> {vehicle.model}</p>
      <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
      <p><strong>Cost in Credits:</strong> {vehicle.cost_in_credits}</p>
      <p><strong>Length:</strong> {vehicle.length}</p>
      <p><strong>Vehicle Class:</strong> {vehicle.vehicle_class}</p>
    </div>
  );
}
