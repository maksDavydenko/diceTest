import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    danger: Palette["primary"];
  }

  interface PaletteOptions {
    danger?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
      light: "#ffffff",
    },
    success: {
      main: "#4caf50",
    },

    danger: {
      main: "#ff3d00",
    },

    background: {
      default: "rgba(0, 0, 0, 0.04)",
    },
  },
});

export default theme;
