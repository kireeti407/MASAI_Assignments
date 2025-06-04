import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Text, Stack, Tag } from '@chakra-ui/react';

const BookList = () => {
  const books = useSelector(state => state.books);
  const { author, genre, status } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const filteredBooks = books.filter(book => {
    const matchesAuthor = author ? book.author.includes(author) : true;
    const matchesGenre = genre ? book.genre.includes(genre) : true;
    const matchesStatus =
      status === 'read' ? book.read : status === 'unread' ? !book.read : true;
    return matchesAuthor && matchesGenre && matchesStatus;
  });

  return (
    <Stack spacing={4}>
      {filteredBooks.map(book => (
        <Box key={book.id} p={4} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="bold">{book.title}</Text>
          <Text>Author: {book.author}</Text>
          <Text>Genre: {book.genre}</Text>
          <Tag colorScheme={book.read ? 'green' : 'red'}>
            {book.read ? 'Read' : 'Unread'}
          </Tag>
          <Stack mt={2} direction="row">
            <Button size="sm" onClick={() => dispatch({ type: 'TOGGLE_READ', payload: book.id })}>
              Toggle Read
            </Button>
            <Button size="sm" onClick={() => dispatch({ type: 'DELETE_BOOK', payload: book.id })}>
              Delete
            </Button>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default BookList;