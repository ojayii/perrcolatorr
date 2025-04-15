import { Box, Typography, Card, IconButton, Tabs, Tab, Button, useTheme } from '@mui/material';
import ImageIcon from "@mui/icons-material/Image";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackButton from '../components/BackButton';
import PageWrapper from '../components/PageWrapper';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState, useEffect } from 'react';
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StraightenIcon from "@mui/icons-material/Straighten";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Profile() {
  const theme = useTheme();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(); 
  };

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) ?? systemPrefersDark;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    console.log(darkMode);
    
  }, [darkMode]);

  return (
    <PageWrapper>
      <Box p={2} pt={"3rem"} pb={10} bgcolor={theme.palette.background.default} minHeight={"100vh"} maxWidth={"60rem"} marginInline={"auto"}>
        <Box textAlign={"center"}>
          <PersonIcon sx={{ width: "5rem", height: "5rem", backgroundColor: theme.palette.background.paper, padding: "1rem", borderRadius: "50%" }} />
          <Typography fontSize={16} fontWeight={600} mb={2}>John Doe</Typography>
        </Box>

        <Card sx={{ marginBottom: "1rem", backgroundColor: theme.palette.background.paper, borderRadius: "12px", padding: "17px", display: "flex", justifyContent: "space-between" }}>
          <Box width={"62px"} height={"101px"} textAlign={"center"}>
            <IconButton sx={{ color: theme.palette.text.primary, padding: "10px", backgroundColor: theme.palette.background.default, marginBottom: "5px" }}>
              <FitnessCenterIcon />
            </IconButton>
            <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color={theme.palette.accent} marginBottom={"5px"}>60 KG</Typography>
            <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color= {theme.palette.text.primary}>Weight</Typography>
          </Box>
          <Box width={"62px"} height={"101px"} textAlign={"center"}>
            <IconButton sx={{ color: theme.palette.text.primary, padding: "10px", backgroundColor: theme.palette.background.default, marginBottom: "5px" }}>
              <StraightenIcon />
            </IconButton>
            <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color={theme.palette.accent} marginBottom={"5px"}>5.6 Ft</Typography>
            <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color= {theme.palette.text.primary}>Height</Typography>
          </Box>
          <Box width={"62px"} height={"101px"} textAlign={"center"}>
            <IconButton sx={{ color: theme.palette.text.primary, padding: "10px", backgroundColor: theme.palette.background.default, marginBottom: "5px" }}>
              <CalendarTodayIcon />
            </IconButton>
            <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color={theme.palette.accent} marginBottom={"5px"}>25 year</Typography>
            <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color= {theme.palette.text.primary}>Age</Typography>
          </Box>
        </Card>

        <Card sx={{ borderRadius: "12px", backgroundColor: theme.palette.background.paper, padding: "0.7rem" }}>
          <Button sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <EditIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Edit Profile Details</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </Button>
          <Button sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <EditIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Change Password</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </Button>
          <Button sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <EditIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Change Email Address</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </Button>
          <Button sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <SettingsIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Settings</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </Button>
          <Button onClick={handleLogout} sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <LogoutIcon sx={{ height: "19px", color: "#cc2424" }} />
            <Typography color='#cc2424' fontSize={14} fontWeight={500}>Logout</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: "#cc2424", height: "19px", transform: "rotate(180DEG)" }} />
          </Button>
        </Card>
      </Box>
    </PageWrapper>
  );
}
