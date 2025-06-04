import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading } from '@chakra-ui/react';
import MatchCard from './MatchCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.matches.favorites);

  return (
    <Box mt={6}>
      <Heading size="md" mb={4}>Favorite Matches</Heading>
      {favorites.map((match) => (
        <MatchCard key={match.id} match={match} isFavorite={true} />
      ))}
    </Box>
  );
};

export default Favorites;