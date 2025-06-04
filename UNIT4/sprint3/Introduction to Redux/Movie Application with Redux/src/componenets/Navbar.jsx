
import { Box, Flex, Button, Spacer, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';

const Navbar = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <Flex p={4} bg="blue.500" color="white" align="center">
      <Heading size="md">🎬 MovieApp</Heading>
      <Spacer />
      <Flex gap={4}>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/booking">Booking</Link>
        {isAuth ? (
          <Button size="sm" onClick={() => dispatch(logout())}>Logout</Button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
