import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const MatchStats = () => {
  const matches = useSelector((state) => state.matches.data);

  const totalMatches = matches.length;
  const totalWins = matches.filter((m) => m.match_result === 'win').length;
  const totalLosses = matches.filter((m) => m.match_result === 'loss').length;
  const totalDraws = matches.filter((m) => m.match_result === 'draw').length;

  return (
    <Box mb={4}>
      <Text>Total Matches: {totalMatches}</Text>
      <Text>Total Wins: {totalWins}</Text>
      <Text>Total Losses: {totalLosses}</Text>
      <Text>Total Draws: {totalDraws}</Text>
    </Box>
  );
};

export default MatchStats;