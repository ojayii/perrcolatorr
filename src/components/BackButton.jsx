import { IconButton, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useLocation } from "react-router-dom";

const BackButton = ({ darkMode, setDarkMode }) => {
    const location = useLocation();
    const modPathName = location.pathname == "/notifications" ? "Notifications" : location.pathname == "/home" ? "Home" : location.pathname == "/" ? "Home" : location.pathname == "/favorites" ? "Favorites" : location.pathname == "/activity" ? "Activity" : location.pathname == "/profile" ? "Profile" : location.pathname == "/workouts" ? "Workouts" : location.pathname == "/shorts" ? "Shorts" : location.pathname == "/create-plan" ? "Create" : location.pathname == "/workout-type" ? "Workout Type" : location.pathname == "/workout-equipment" ? "Workout Equipment" : ""
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                height: "3rem",
                marginBottom: "1rem",
                paddingRight: { lg: "76px" },
                position: "fixed",
                top: 0,
                left: { lg: "76px", md: "0", sm: "0", xs: "0" },
                right: 0,
                zIndex: 1000,
                background: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${theme.palette.background.default} 100%)`,
            }}
        >
            <IconButton
                onClick={() => window.history.back()}
                sx={{
                    zIndex: "100",
                    position: "absolute",
                    top: "50%",
                    left: "1.2rem",
                    transform: "translate(-50%, -50%)",
                    color: theme.palette.accent,
                }}
            >
                <ChevronLeftIcon />
            </IconButton>
            <Typography color={theme.palette.text.primary} marginInline={"auto"}>{modPathName}</Typography>
            <IconButton
                sx={{
                    zIndex: "100",
                    position: "absolute",
                    top: "50%",
                    right: "-1rem",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => setDarkMode((prev) => !prev)} color="inherit">
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
};

export default BackButton;
