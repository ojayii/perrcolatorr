import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1DB954" }, // Green accent
    background: { default: "#f5f5f5", paper: "#F7F8FA" },
    text: { primary: "#121212" },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1DB954" },
    background: { default: "#5C4033", paper: "#6F4E37" },
    text: { primary: "#ffffff" },
  },
});
