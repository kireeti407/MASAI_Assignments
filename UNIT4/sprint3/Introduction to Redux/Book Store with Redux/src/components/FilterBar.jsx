import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Stack, Select, Box } from '@chakra-ui/react';

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch({
      type: 'SET_FILTER',
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <Box mb={4}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        <Input name="author" placeholder="Filter by Author" onChange={handleFilter} />
        <Input name="genre" placeholder="Filter by Genre" onChange={handleFilter} />
        <Select name="status" onChange={handleFilter} defaultValue="all">
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </Select>
      </Stack>
    </Box>
  );
};

export default FilterBar;