import { Box, Typography, Card, IconButton, Tabs, Tab, Button, useTheme } from '@mui/material';
import ImageIcon from "@mui/icons-material/Image";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackButton from '../components/BackButton';
import { supabase } from "../supabaseClient";
import PageWrapper from '../components/PageWrapper';
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon Icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun Icon
import { useState, useEffect } from 'react';

export default function Profile() {
  const theme = useTheme();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(); // Refresh the app
  };

  // Detect system preference for the first load
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Load theme from local storage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) ?? systemPrefersDark;
  });

  // Save user preference in local storage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    console.log(darkMode);
    
  }, [darkMode]);

  return (
    <PageWrapper>
      <Box p={2} pt={"3rem"} pb={10} bgcolor={theme.palette.background.default} minHeight={"100vh"} maxWidth={"60rem"} marginInline={"auto"}>
        {/* <BackButton pageTitle={"Profile"} /> */}
        <Box textAlign={"center"}>
          <PersonIcon sx={{ width: "5rem", height: "5rem", backgroundColor: theme.palette.background.paper, padding: "1rem", borderRadius: "50%" }} />
          <Typography fontSize={16} fontWeight={600} mb={2}>John Doe</Typography>
        </Box>

        <Card sx={{ marginBottom: "1rem", backgroundColor: theme.palette.background.paper, borderRadius: "12px", padding: "17px", display: "flex", justifyContent: "space-between" }}>
          <Box width={"62px"} height={"101px"} textAlign={"center"}>
            <IconButton sx={{ color: theme.palette.text.primary, padding: "10px", backgroundColor: theme.palette.background.default, marginBottom: "5px" }}>
              <NotificationsIcon />
            </IconButton>
            <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#29E33C" marginBottom={"5px"}>60 KG</Typography>
            <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color= {theme.palette.text.primary}>Weight</Typography>
          </Box>
          <Box width={"62px"} height={"101px"} textAlign={"center"}>
            <IconButton sx={{ color: theme.palette.text.primary, padding: "10px", backgroundColor: theme.palette.background.default, marginBottom: "5px" }}>
              <NotificationsIcon />
            </IconButton>
            <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#29E33C" marginBottom={"5px"}>5.6 Ft</Typography>
            <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color= {theme.palette.text.primary}>Height</Typography>
          </Box>
          <Box width={"62px"} height={"101px"} textAlign={"center"}>
            <IconButton sx={{ color: theme.palette.text.primary, padding: "10px", backgroundColor: theme.palette.background.default, marginBottom: "5px" }}>
              <NotificationsIcon />
            </IconButton>
            <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#29E33C" marginBottom={"5px"}>25 year</Typography>
            <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color= {theme.palette.text.primary}>Age</Typography>
          </Box>
        </Card>

        <Card sx={{ borderRadius: "12px", backgroundColor: theme.palette.background.paper, padding: "0.7rem" }}>
          <IconButton sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <NotificationsIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Edit Profile Details</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </IconButton>
          <IconButton sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <NotificationsIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Change Password</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </IconButton>
          <IconButton sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <NotificationsIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Change Email Address</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </IconButton>
          <IconButton sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <NotificationsIcon sx={{ height: "19px", color: theme.palette.text.primary }} />
            <Typography color= {theme.palette.text.primary} fontSize={14} fontWeight={500}>Settings</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: theme.palette.text.primary, height: "19px", transform: "rotate(180DEG)" }} />
          </IconButton>
          <Button onClick={handleLogout} sx={{ display: "flex", width: "100%", gap: "5px", paddingBlock: "1rem" }}>
            <NotificationsIcon sx={{ height: "19px", color: "#cc2424" }} />
            <Typography color='#cc2424' fontSize={14} fontWeight={500}>Logout</Typography>
            <ArrowBackIcon sx={{ marginLeft: "auto", color: "#cc2424", height: "19px", transform: "rotate(180DEG)" }} />
          </Button>
        </Card>
      </Box>
    </PageWrapper>
  );
}
