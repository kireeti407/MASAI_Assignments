import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import MatchList from './components/MatchList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import Favorites from './components/Favorites';
import MatchStats from './components/MatchStats';

const App = () => {
  return (
    <Container maxW="container.lg" py={6}>
      <Heading mb={4}>Football Match Tracker</Heading>
      <SearchBar />
      <FilterBar />
      <MatchStats />
      <MatchList />
      <Favorites />
    </Container>
  );
};

export default App;