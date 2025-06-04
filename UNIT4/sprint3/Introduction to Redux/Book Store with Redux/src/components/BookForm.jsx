import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Box, Input, Button, Stack } from '@chakra-ui/react';

const BookForm = () => {
  const [form, setForm] = useState({ title: '', author: '', genre: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.title && form.author && form.genre) {
      dispatch({
        type: 'ADD_BOOK',
        payload: { ...form, id: uuidv4(), read: false },
      });
      setForm({ title: '', author: '', genre: '' });
    }
  };

  return (
    <Box mb={4}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        <Input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <Input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
        <Input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} />
        <Button colorScheme="teal" onClick={handleSubmit}>Add Book</Button>
      </Stack>
    </Box>
  );
};

export default BookForm;