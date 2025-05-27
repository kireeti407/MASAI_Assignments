import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => setWeather(res.data))
      .catch(err => setError('City not found'));
  }, [city]);

  if (error) return <p style={{ padding: '1rem' }}>{error}</p>;
  if (!weather) return <p style={{ padding: '1rem' }}>Loading...</p>;

  const { name, main, weather: weatherInfo } = weather;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Weather in {name}</h2>
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Condition:</strong> {weatherInfo[0].description}</p>

      {/* Bonus: Embed Google Map */}
      <iframe
        title="Google Map"
        width="100%"
        height="300"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_EMBED_API_KEY&q=${name}`}
        style={{ border: '0', marginTop: '1rem' }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WeatherDetails;
