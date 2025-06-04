import { Box, Image, Text, Stack } from '@chakra-ui/react';

export default function CoffeeCard({ coffee }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={coffee.image} alt={coffee.title} h="150px" mx="auto" />
      <Stack mt={2}>
        <Text fontWeight="bold">{coffee.title}</Text>
        <Text>Price: ₹{coffee.price}</Text>
        <Text>Type: {coffee.type}</Text>
      </Stack>
    </Box>
  );
}
