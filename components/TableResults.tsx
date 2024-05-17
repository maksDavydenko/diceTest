

import React from 'react';
import { useTheme } from '@mui/material/styles';

import {
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Table,
    TableHead,
} from '@mui/material';

import { ItemProps } from '@/types/types';

const TableResults: React.FC<ItemProps> = ({ history }) => {
    const theme = useTheme();
    
    return (
        <>
        {history.length > 0 && (
        <TableContainer style={{
        maxWidth: '550px',
        margin: '0 auto'
        }}>
        <Table>
            <TableHead >
                <TableRow>
                <TableCell 
                    sx={{
                        fontWeight: 'bold'
                    }}>
                    Time
                </TableCell>
                <TableCell 
                    sx={{
                        fontWeight: 'bold'
                     }}>
                    Guess
                </TableCell>
                <TableCell
                    sx={{
                    fontWeight: 'bold'
                    }}>
                        Result
                </TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            {history.map((item) => (
                <TableRow key={item.id}>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>{item.condition === 'over' ? 'Over' : 'Under'} {item.threshold}</TableCell>
                    <TableCell style={{
                        color: item.won ? theme.palette.success.main : theme.palette.danger.main
                    }}>
                        {item.result}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </TableContainer>
    )}
</>
)}
    
export default TableResults;