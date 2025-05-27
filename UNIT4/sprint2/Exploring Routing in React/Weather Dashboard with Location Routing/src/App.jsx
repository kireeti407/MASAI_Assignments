import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import WeatherDetails from './pages/WeatherDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/weather/:city" element={<WeatherDetails />} />
    </Routes>
  );
}

export default App;
