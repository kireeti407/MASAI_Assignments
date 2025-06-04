export const fetchMatches = () => async (dispatch) => {
  dispatch({ type: 'FETCH_MATCHES_REQUEST' });
  try {
    const res = await fetch('http://jsonmock.hackerrank.com/api/football_matches?page=2');
    const data = await res.json();
    dispatch({ type: 'FETCH_MATCHES_SUCCESS', payload: data.data });
  } catch (err) {
    dispatch({ type: 'FETCH_MATCHES_FAILURE' });
  }
};

export const setFilters = (filters) => ({
  type: 'SET_FILTERS',
  payload: filters,
});

export const toggleFavorite = (match) => ({
  type: 'TOGGLE_FAVORITE',
  payload: match,
});
