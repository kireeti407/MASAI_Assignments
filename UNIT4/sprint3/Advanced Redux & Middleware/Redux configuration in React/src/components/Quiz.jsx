import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  INCREMENT_SCORE
} from "../redux/actionTypes";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestion, score } = useSelector((store) => store.quiz);

  useEffect(() => {
    dispatch({ type: FETCH_QUIZ_REQUEST });
    axios
      .get("https://dbloz2ek@e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz")
      .then((res) => {
        dispatch({ type: FETCH_QUIZ_SUCCESS, payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_QUIZ_FAILURE, payload: err.message });
      });
  }, [dispatch]);

  const handleAnswer = (correct) => {
    if (correct) dispatch({ type: INCREMENT_SCORE });
    if (currentQuestion + 1 === questions.length) navigate("/result");
    else dispatch({ type: FETCH_QUIZ_SUCCESS, payload: questions, currentQuestion: currentQuestion + 1 });
  };

  const question = questions[currentQuestion];

  if (!question) return <Text>Loading...</Text>;

  return (
    <Box maxW="xl" mx="auto" mt={10}>
      <Text fontSize="xl" fontWeight="bold">{question.question}</Text>
      {question.options.map((opt, i) => (
        <Button key={i} m={2} onClick={() => handleAnswer(opt === question.correct_answer)}>
          {opt}
        </Button>
      ))}
      <Button onClick={() => handleAnswer(false)} colorScheme="gray" mt={4}>Skip</Button>
    </Box>
  );
}
