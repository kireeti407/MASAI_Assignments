import React from 'react';
import { Box, Heading, Container } from '@chakra-ui/react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <Container maxW="container.lg" py={6}>
      <Heading mb={4}>Book Library</Heading>
      <BookForm />
      <FilterBar />
      <BookList />
    </Container>
  );
}

export default App;