import React from 'react';
import { Container } from '@mui/material';
import DiceGame from '../components/DiceGame';

const Home: React.FC = () => {
  return (
    <Container>
      <DiceGame />
    </Container>
  );
};

export default Home;
