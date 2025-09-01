
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Home from './pages/home';
import People from './pages/people';
import Planets from './pages/planets';
import Species from './pages/species';
import Starships from './pages/starships';
import Vehicles from './pages/vehicles';
import SearchBar from './components/searchbar';
import FilmDetails from './pages/filmDetails';
import PersonDetails from './pages/personDetails';
import PlanetDetails from './pages/planetDetails';
import SpeciesDetails from './pages/speciesDetails';
import StarshipDetails from './pages/starshipDetails';
import VehicleDetails from './pages/vehicleDetails';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
 
  let category = "films";
  if (location.pathname.startsWith("/people")) category = "people";

  const handleSelect = (item) => {
    if (category === "people") {
      navigate(`/people/${item.id || item.url.split("/").filter(Boolean).pop()}`);
    } else {
      navigate(`/films/${item.id || item.url.split("/").filter(Boolean).pop()}`);
    }
  };
  return (
    <>
      <Nav />
      <SearchBar category={category} onSelect={handleSelect} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/:id" element={<FilmDetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetails />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
        <Route path="/species" element={<Species />} />
        <Route path="/species/:id" element={<SpeciesDetails />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<VehicleDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App
