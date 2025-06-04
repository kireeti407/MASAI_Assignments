import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

const initialState = {
  loading: false,
  isAuth: false,
  token: "",
  error: null
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuth: true, token: payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
