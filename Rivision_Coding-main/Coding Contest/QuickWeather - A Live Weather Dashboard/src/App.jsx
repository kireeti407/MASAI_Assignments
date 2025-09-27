import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import useFetch from './useFetch';

function App() {
  const [city, setCity] = useState('');
  const apiKey = '104167edf225332bd563aa4395bd3dc3'; 
  const apiUrl = city ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` : '';

  const { data, loading, error } = useFetch(apiUrl);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay data={data} loading={loading} error={error} />
    </div>
  );
}

export default App;