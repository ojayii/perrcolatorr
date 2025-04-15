import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // accent: "#f4e50e",
    accent:  "#29E33C",
    background: { default: "#f5f5f5", paper: "#F7F8FA" },
    text: { primary: "#121212" },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // accent: "#64C111",
    accent:  "#29E33C",
    // background: { default: "#022243", paper: "#485256" },
    background: { default: "#010101", paper: "#0d0d0d" },
    text: { primary: "#E2E2E3" },
  },
});
