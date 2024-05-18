import React from 'react';
import { Container, Alert, AlertTitle } from '@mui/material';
import { ResultItem } from '@/types/types';
import theme from '@/theme';

export interface AlertItemProps {
    history: ResultItem[];
}

const AlertItem: React.FC<AlertItemProps> = ({ history }) => {
  return (
    <>
      {history.length > 0 && (
        <Container
          sx={{
            maxWidth: 600,
            position: 'fixed',
            left: '50%',
            transform: 'translate(-50%, 0)',
            zIndex: '999',
          }}
        >
          {history[0].won ? (
            <Alert 
              sx={{ 
                color: theme.palette.primary.light 
                }} 
                variant="filled" 
                severity="success">
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
