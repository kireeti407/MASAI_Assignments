
import { Box, Image, Text, Button } from '@chakra-ui/react';

const MovieCard = ({ movie, onAddWatchlist, onBook }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={3} shadow="md">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        borderRadius="md"
      />
      <Text mt={2} fontWeight="bold" fontSize="lg">{movie.title}</Text>
      <Text>Rating: {movie.vote_average}</Text>
      <Button mt={2} size="sm" colorScheme="teal" onClick={() => onAddWatchlist(movie)}>
        Add to Watchlist
      </Button>
      <Button mt={2} size="sm" colorScheme="blue" onClick={() => onBook(movie)}>
        Book Now
      </Button>
    </Box>
  );
};

export default MovieCard;
