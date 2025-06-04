import React from 'react';
import { Select, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/filters/filtersActions';

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleResultFilter = (e) => {
    dispatch(setFilters({ result: e.target.value }));
  };

  return (
    <Box mb={4}>
      <Select placeholder="Filter by result" onChange={handleResultFilter}>
        <option value="win">Win</option>
        <option value="loss">Loss</option>
        <option value="draw">Draw</option>
      </Select>
    </Box>
  );
};

export default FilterBar;