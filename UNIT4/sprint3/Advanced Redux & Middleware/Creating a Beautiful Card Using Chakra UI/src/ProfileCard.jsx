import {
  Box,
  Avatar,
  Text,
  Button,
  HStack,
  VStack,
  Tag,
  Link,
} from '@chakra-ui/react';

export default function ProfileCard() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={5}
      textAlign="center"
      bg="white"
    >
      <Avatar
        size="xl"
        name="Lindsey James"
        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
        mb={4}
      />
      <Text fontWeight="bold" fontSize="xl">
        Lindsey James
      </Text>
      <Text color="gray.500" mb={3}>
        @lindsey_jam3s
      </Text>
      <Text fontSize="sm" mb={2}>
        Actress, musician, songwriter<br />
        and artist. PM for work inquires<br />
        or <Link color="blue.500" href="#">#tag</Link><br />
        me in your posts
      </Text>
      <HStack spacing={2} justify="center" my={3}>
        <Tag>#ART</Tag>
        <Tag>#PHOTOGRAPHY</Tag>
        <Tag>#MUSIC</Tag>
      </HStack>
      <HStack justify="center" spacing={4}>
        <Button colorScheme="gray" variant="outline">Message</Button>
        <Button colorScheme="blue">Follow</Button>
      </HStack>
    </Box>
  );
}
