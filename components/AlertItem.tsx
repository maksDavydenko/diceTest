import React from 'react';
import { Container, Alert, AlertTitle } from '@mui/material';
import { ItemProps } from '@/types/types';

const AlertItem: React.FC<ItemProps> = ({ history }) => {
  return (
    <>
      {history.length > 0 && (
        <Container
          sx={{
            maxWidth: '600px',
            position: 'fixed',
            left: '50%',
            transform: 'translate(-50%, 0)',
            zIndex: '999',
          }}
        >
          {history[0].won ? (
            <Alert sx={{ color: '#fff' }} variant="filled" severity="success">
              You won
            </Alert>
          ) : (
            <Alert variant="filled" severity="error">
              <AlertTitle>You lost</AlertTitle>
              Number was higher
            </Alert>
          )}
        </Container>
      )}
    </>
  );
};

export default AlertItem;
