// src/components/Result.jsx
import { useSelector } from "react-redux";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const score = useSelector((state) => state.quiz.score);
  const total = useSelector((state) => state.quiz.questions.length);
  const navigate = useNavigate();

  return (
    <Box maxW="md" mx="auto" mt={10} textAlign="center">
      <Heading mb={5}>Quiz Result</Heading>
      <Text fontSize="xl" mb={4}>
        You scored <b>{score}</b> out of <b>{total}</b>
      </Text>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Go to Login
      </Button>
    </Box>
  );
}
