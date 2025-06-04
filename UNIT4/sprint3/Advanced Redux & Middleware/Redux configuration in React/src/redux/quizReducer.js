import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  INCREMENT_SCORE
} from './actionTypes';

const initialState = {
  loading: false,
  questions: [],
  currentQuestion: 0,
  score: 0,
  error: null
};

export const quizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUIZ_SUCCESS:
      return { ...state, loading: false, questions: payload };
    case FETCH_QUIZ_FAILURE:
      return { ...state, loading: false, error: payload };
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
};
