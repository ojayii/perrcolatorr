import { Box, useTheme, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Navbar() {
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;
  const theme = useTheme();
  const iconStyle = (active) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "50%",
    color: active ? theme.palette.accent : theme.palette.text.primary,
    "&::after": active
      ? {
        content: '""',
        position: "absolute",
        right: { lg: "-0.6rem", },
        top: { lg: "0", md: "-1rem", sm: "-1rem", xs: "-1rem" },
        width: { lg: "3px", md: "100%", sm: "100%", xs: "100%" },
        height: { lg: "100%", md: "3px", sm: "3px", xs: "3px" },
        backgroundColor: theme.palette.accent,
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
      paddingBlock={2}
      sx={{
        flexDirection: { lg: "column" },
        right: { lg: "auto", md: "0", sm: "0", xs: "0" },
        top: { lg: "0" },
        justifyContent: { lg: "center", md: "space-around", sm: "space-around", xs: "space-around" },
        gap: { lg: "2rem" }
      }}
    >
      <Button component={Link} to="/home" sx={{ padding: "0" }}>
        <Box sx={iconStyle(isActive("/home"))}>
          {/* <BarChartIcon /> */}
          <HomeIcon />
        </Box>
      </Button>

      <Button component={Link} to="/shorts" sx={{ padding: "0" }}>
        <Box sx={iconStyle(isActive("/shorts"))}>
          <PlayArrowIcon />
        </Box>
      </Button>

      <Button component={Link} to="/favorites" sx={{ padding: "0" }}>
        <Box sx={iconStyle(isActive("/favorites"))}>
          <FavoriteIcon />
        </Box>
      </Button>

      <Button component={Link} to="/workouts" sx={{ padding: "0" }}>
        <Box sx={iconStyle(isActive("/workouts"))}>
          <FitnessCenterIcon />
        </Box>
      </Button>

      <Button component={Link} to="/profile" sx={{ padding: "0" }}>
      <Box sx={iconStyle(isActive("/profile"))}>
          <PersonIcon />
        </Box>
      </Button>
    </Box>
  );
}