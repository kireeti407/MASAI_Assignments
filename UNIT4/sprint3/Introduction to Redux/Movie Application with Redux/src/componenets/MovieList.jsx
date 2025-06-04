// components/MovieList.jsx
import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onAddWatchlist, onBook }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddWatchlist={onAddWatchlist}
          onBook={onBook}
        />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
