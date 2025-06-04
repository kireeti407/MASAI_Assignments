
import { Box, Text, Button, VStack } from "@chakra-ui/react";

export default function QuestionCard({ questionData, onAnswer, onSkip }) {
  const { question, options, correct_answer } = questionData;

  const handleAnswerClick = (option) => {
    const isCorrect = option === correct_answer;
    onAnswer(isCorrect);
  };

  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="xl" bg="white" maxW="xl" mx="auto">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {question}
      </Text>

      <VStack spacing={3}>
        {options.map((option, index) => (
          <Button
            key={index}
            colorScheme="teal"
            variant="outline"
            width="100%"
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </Button>
        ))}

        <Button width="100%" colorScheme="gray" onClick={onSkip}>
          Skip
        </Button>
      </VStack>
    </Box>
  );
}
