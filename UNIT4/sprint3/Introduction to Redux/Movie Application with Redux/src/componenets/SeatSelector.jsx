// components/SeatSelector.jsx
import { Grid, GridItem, Button } from '@chakra-ui/react';

const SeatSelector = ({ selectedSeats, onSelectSeat }) => {
  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={3} p={4}>
      {seats.map(seat => (
        <GridItem key={seat}>
          <Button
            colorScheme={selectedSeats.includes(seat) ? 'green' : 'gray'}
            onClick={() => onSelectSeat(seat)}
          >
            {seat}
          </Button>
        </GridItem>
      ))}
    </Grid>
  );
};

export default SeatSelector;
