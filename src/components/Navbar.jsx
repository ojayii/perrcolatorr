import { Box, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon Icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun Icon

export default function Navbar() {
  const location = useLocation(); // Get the current route
  // console.log(location.pathname);

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const theme = useTheme();

  // Dynamic styling function for active/inactive icons
  const iconStyle = (active) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "50%",
    color: active ? "#29E33C" : theme.palette.text.primary,
    "&::after": active
      ? {
        content: '""',
        position: "absolute",
        right: { lg: "-1rem", },
        top: { lg: "0", md: "-1rem", sm: "-1rem", xs: "-1rem" },
        width: { lg: "3px", md: "100%", sm: "100%", xs: "100%" },
        height: { lg: "100%", md: "3px", sm: "3px", xs: "3px" },
        backgroundColor: "#29E33C",
        borderRadius: "10px",

      }
      : {},
  });

  return (
    <Box
      zIndex={1000}
      position="fixed"
      bottom={0}
      left={0}
      bgcolor={theme.palette.background.paper}
      display="flex"
      padding={2}
      sx={{
        flexDirection: { lg: "column" },
        right: { lg: "auto", md: "0", sm: "0", xs: "0" },
        top: { lg: "0" },
        justifyContent: { lg: "center", md: "space-around", sm: "space-around", xs: "space-around" },
        gap: { lg: "2rem" }
      }}
    >
      {/* Home */}
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Box sx={iconStyle(isActive("/home"))}>
          <HomeIcon />
        </Box>
      </Link>

      {/* Favorites */}
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <Box sx={iconStyle(isActive("/favorites"))}>
          <FavoriteIcon />
        </Box>
      </Link>

      {/* Workouts */}
      <Link to="/activity" style={{ textDecoration: "none" }}>
        <Box sx={iconStyle(isActive("/activity"))}>
          <BarChartIcon />
        </Box>
      </Link>

      <Link to="/workouts" style={{ textDecoration: "none" }}>
        <Box sx={iconStyle(isActive("/workouts"))}>
          <FitnessCenterIcon />
        </Box>
      </Link>

      {/* Add New Workout */}


      {/* Profile */}
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <Box sx={iconStyle(isActive("/profile"))}>
          <PersonIcon />
        </Box>
      </Link>
    </Box>
  );
}


