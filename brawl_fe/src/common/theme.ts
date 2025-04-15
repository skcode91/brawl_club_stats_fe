import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD700",
    },
    secondary: {
      main: "#1E90FF",
    },
    background: {
      default: "#0D0D0D",
      paper: "#1A1A1A",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto), var(--font-geist-sans), sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          backgroundColor: "#222",
          color: "#FFD700",
        },
        body: {
          borderBottom: "1px solid #333",
        },
      },
    },
  },
});

export default theme;
