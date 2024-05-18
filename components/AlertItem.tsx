import React from "react";
import { Container, Alert, AlertTitle } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ResultItem } from "@/types/types";

interface AlertItemProps {
  latestResult: ResultItem;
}

const AlertItem: React.FC<AlertItemProps> = ({ latestResult }) => {
  const theme = useTheme();

  if (!latestResult) {
    return null;
  }

  return (
    <Container
      style={{
        maxWidth: 600,
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: 999,
      }}
    >
      {latestResult.won ? (
        <Alert
          style={{
            color: theme.palette.primary.light,
          }}
          variant="filled"
          severity="success"
        >
          You won
        </Alert>
      ) : (
        <Alert variant="filled" severity="error">
          <AlertTitle>You lost</AlertTitle>
          {latestResult.condition === "over"
            ? "Number was lower"
            : "Number was higher"}
        </Alert>
      )}
    </Container>
  );
};

export default AlertItem;
