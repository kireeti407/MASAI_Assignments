import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: {
      latitude: "",
      longitude: "",
    },
  },
  courses_offered: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "UPDATE_NESTED_FIELD":
      return {
        ...state,
        address: {
          ...state.address,
          [action.field]: action.value,
        },
      };
    case "UPDATE_CITY_FIELD":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            [action.field]: action.value,
          },
        },
      };
    case "UPDATE_LOCALITY_FIELD":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              [action.field]: action.value,
            },
          },
        },
      };
    case "UPDATE_COORDINATES":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            [action.field]: action.value,
          },
        },
      };
    case "UPDATE_COURSES":
      return {
        ...state,
        courses_offered: action.value.split(",").map((course) => course.trim()),
      };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

function CollegeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (type, field) => (e) => {
    try {
      dispatch({ type, field, value: e.target.value });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(state);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>College Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="College Name"
          value={state.name}
          onChange={handleChange("UPDATE_FIELD", "name")}
        />
        <br />
        <input
          placeholder="Establishment Year"
          value={state.establishment_year}
          onChange={handleChange("UPDATE_FIELD", "establishment_year")}
        />
        <br />
        <input
          placeholder="Building"
          value={state.address.building}
          onChange={handleChange("UPDATE_NESTED_FIELD", "building")}
        />
        <br />
        <input
          placeholder="Street"
          value={state.address.street}
          onChange={handleChange("UPDATE_NESTED_FIELD", "street")}
        />
        <br />
        <input
          placeholder="City Name"
          value={state.address.city.name}
          onChange={handleChange("UPDATE_CITY_FIELD", "name")}
        />
        <br />
        <input
          placeholder="Pin Code"
          value={state.address.city.locality.pinCode}
          onChange={handleChange("UPDATE_LOCALITY_FIELD", "pinCode")}
        />
        <br />
        <input
          placeholder="Landmark"
          value={state.address.city.locality.landmark}
          onChange={handleChange("UPDATE_LOCALITY_FIELD", "landmark")}
        />
        <br />
        <input
          placeholder="State"
          value={state.address.state}
          onChange={handleChange("UPDATE_NESTED_FIELD", "state")}
        />
        <br />
        <input
          placeholder="Latitude"
          value={state.address.coordinates.latitude}
          onChange={handleChange("UPDATE_COORDINATES", "latitude")}
        />
        <br />
        <input
          placeholder="Longitude"
          value={state.address.coordinates.longitude}
          onChange={handleChange("UPDATE_COORDINATES", "longitude")}
        />
        <br />
        <input
          placeholder="Courses (comma separated)"
          onChange={handleChange("UPDATE_COURSES")}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {submittedData && (
        <div style={{ marginTop: "20px", listStyle:"none"}}>
          <h3>Submitted College Data</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Establishment Year:</strong>{" "}
            {submittedData.establishment_year}
          </p>
          <p>
            <strong>Address:</strong>
          </p>
          <ul style={{listStyle:"none"}}>
            <li>
              <strong>Building:</strong> {submittedData.address.building}
            </li>
            <li>
              <strong>Street:</strong> {submittedData.address.street}
            </li>
            <li>
              <strong>City:</strong> {submittedData.address.city.name}
            </li>
            <li>
              <strong>Pin Code:</strong>{" "}
              {submittedData.address.city.locality.pinCode}
            </li>
            <li>
              <strong>Landmark:</strong>{" "}
              {submittedData.address.city.locality.landmark}
            </li>
            <li>
              <strong>State:</strong> {submittedData.address.state}
            </li>
            <li>
              <strong>Coordinates:</strong>
              Lat: {submittedData.address.coordinates.latitude}, Long:{" "}
              {submittedData.address.coordinates.longitude}
            </li>
          </ul>
          <p>
            <strong>Courses Offered:</strong>
          </p>
          <ul>
            {submittedData.courses_offered.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CollegeForm;
