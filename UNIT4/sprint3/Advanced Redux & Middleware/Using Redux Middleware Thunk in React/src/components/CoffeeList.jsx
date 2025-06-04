import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../../../Creating a Beautiful Card Using Chakra UI/src/redux/actions';
import CoffeeCard from './CoffeeCard';
import {
  Box,
  Grid,
  Select,
  Text,
  Spinner,
  Flex,
  Heading,
} from '@chakra-ui/react';

export default function CoffeeList() {
  const dispatch = useDispatch();
  const { coffees, loading, error } = useSelector((state) => state);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(fetchCoffee(sortOrder));
  }, [dispatch, sortOrder]);

  return (
    <Flex p={5} gap={5} flexDirection={["column", "row"]}>
      <Box w={["100%", "20%"]}>
        <Heading size="md" mb={3}>Sort By Price</Heading>
        <Select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
      </Box>

      <Box w={["100%", "80%"]}>
        {loading ? (
          <Spinner size="xl" />
        ) : error ? (
          <Text color="red.500">{error}</Text>
        ) : (
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={5}>
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </Grid>
        )}
      </Box>
    </Flex>
  );
}
