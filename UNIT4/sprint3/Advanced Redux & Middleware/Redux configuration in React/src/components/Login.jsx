import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../redux/actionTypes';
import { Box, Input, Button, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch({ type: LOGIN_REQUEST });

    axios.post('https://reqres.in/api/login', { email, password })
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        navigate("/quiz");
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.message });
      });
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading mb={5}>Login</Heading>
      <Input placeholder="Email" mb={3} value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" mb={3} value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button colorScheme="blue" onClick={login}>Login</Button>
    </Box>
  );
}
