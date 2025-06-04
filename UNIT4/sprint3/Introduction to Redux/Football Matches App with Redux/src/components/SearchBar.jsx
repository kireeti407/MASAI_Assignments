import React from 'react';
import { Input, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/filters/filtersActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setFilters({ team: e.target.value }));
  };

  return (
    <Box mb={4}>
      <Input placeholder="Search by team name..." onChange={handleSearch} />
    </Box>
  );
};

export default SearchBar;