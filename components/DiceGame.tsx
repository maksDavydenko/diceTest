import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
    Slider,
    Button, 
    Radio,
    RadioGroup, 
    FormControlLabel, 
    FormControl,
    Container,
    Typography,
    Box,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import AlertItem from './AlertItem';
import TableResults from './TableResults';
import { ResultItem } from '@/types/types';

const DiceGame: React.FC = () => {
    const theme = useTheme();
    const [threshold, setThreshold] = useState<number>(50);
    const [condition, setCondition] = useState<'over' | 'under'>('over');
    const [result, setResult] = useState<number>(0);
    const [history, setHistory] = useState<ResultItem[]>([]);

  const getCurrentTime = ():string => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const isWinner = (rollResult: number): boolean=> {
    if (condition === 'over') {
      return rollResult > threshold;
    }
    return rollResult < threshold;
  };

  const handlePlay = () => {
    const rollResult = Math.floor(Math.random() * 100) + 1;

    const resultItem: ResultItem = {
        id: uuidv4(),
        condition,
        threshold,
        time: getCurrentTime(),
        result: rollResult,
        won: isWinner(rollResult),
    }

    setResult(rollResult);
    const newHistory = [resultItem, ...history].slice(0, 10);
    setHistory(newHistory);
  };


  return (
    <>
    <AlertItem history={history} />
        <Container style={{
            paddingTop: 90,
            maxWidth: 300,
            marginBottom: 20
        }}>
        <Box
            style={{
            position: 'relative',
            minHeight: '200px',
            backgroundColor: theme.palette.background.default,
        }}>
        {result !== null && (
          <Typography style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            }} 
            variant='h1'>
            {result}
        </Typography>
        )}
        </Box>
      <FormControl component="fieldset" fullWidth>
      <Box 
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
        }}>
        <RadioGroup
          row
          value={condition}
          onChange={(e) => setCondition(e.target.value as 'over' | 'under')}
        >
         <FormControlLabel 
            labelPlacement="start"
            value="under"
            control={<Radio />} 
            label="Under" />
          <FormControlLabel 
            labelPlacement="start"
            value="over"
            control={<Radio />} 
            label="Over"
            />
        </RadioGroup>
    </Box>
      <Slider
          value={threshold}
          onChange={(e, newValue) => setThreshold(newValue as number)}
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
          step={1}
          marks={[
            { value: 0, label: '0' },
            { value: 20}, 
            { value: 40}, 
            { value: 60}, 
            { value: 80}, 
            { value: 100, label: '100' }
          ]}
          min={0}
          max={100}
          style={{ 
            marginBottom: 35,
          }}
        />
         <Button 
            variant="contained"
            style={{
            backgroundColor: theme.palette.primary.main,
          }} onClick={handlePlay}>
          Play
        </Button>
      </FormControl>
      </Container>
    <TableResults history={history} />
    </>
  );
};

export default DiceGame;
