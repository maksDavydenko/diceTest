import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableHead,
} from "@mui/material";
import { ResultItem } from "@/types/types";

interface TableResultsProps {
  history: ResultItem[];
}

const TableResults: React.FC<TableResultsProps> = ({ history }) => {
  const theme = useTheme();

  const commonStyles = {
    tableContainer: {
      maxWidth: 550,
      margin: "0 auto",
    },
    tableCellHeader: {
      fontWeight: "bold",
    },
    tableCellResult: (won: boolean) => ({
      color: won ? theme.palette.success.main : theme.palette.error.main,
    }),
  };

  return (
    <>
      {history.length > 0 && (
        <TableContainer sx={commonStyles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={commonStyles.tableCellHeader}>Time</TableCell>
                <TableCell sx={commonStyles.tableCellHeader}>Guess</TableCell>
                <TableCell sx={commonStyles.tableCellHeader}>Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>
                    {item.condition === "over" ? "Over" : "Under"}{" "}
                    {item.threshold}
                  </TableCell>
                  <TableCell sx={commonStyles.tableCellResult(item.won)}>
                    {item.result}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default TableResults;
