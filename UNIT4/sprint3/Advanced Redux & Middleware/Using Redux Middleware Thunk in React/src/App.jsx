import React from 'react';
import CoffeeList from './components/CoffeeList';
import { Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Box p={5}>
      <Heading mb={5}>☕ Coffee List App</Heading>
      <CoffeeList />
    </Box>
  );
}

export default App;
