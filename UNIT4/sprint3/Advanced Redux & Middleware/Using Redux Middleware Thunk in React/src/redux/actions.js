import axios from 'axios';

export const fetchCoffee = (sort = "") => async (dispatch) => {
  dispatch({ type: "FETCH_COFFEE_REQUEST" });

  try {
    const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee${sort ? `?sort=price&order=${sort}` : ""}`;
    const res = await axios.get(url);
    dispatch({ type: "FETCH_COFFEE_SUCCESS", payload: res.data.data });
  } catch (err) {
    dispatch({ type: "FETCH_COFFEE_FAILURE", payload: err.message });
  }
};
