import React from 'react';

const WeatherDisplay = ({ data, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Enter a city to get the weather.</div>;
  }

  return (
    <div className="WeatherDisplay">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].main}</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
};

// React.memo is a higher-order component that memoizes the rendered output of the component.
// This means that React will skip rendering the component if its props have not changed.
// It is a good performance practice for presentational components like this one,
// as it prevents unnecessary re-renders when the parent component's state changes
// but the props passed to this component remain the same.
export default React.memo(WeatherDisplay);
