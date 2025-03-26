import { Avatar, Box, Typography, IconButton, Card, CardContent, Button, Tabs, Tab, Grid2 } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
// import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Box padding={5} bgcolor="white">
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <IconButton color="inherit">
                        <AccountCircleIcon sx={{ fontSize: 50 }} /> {/* Profile Icon */}
                        <Box textAlign="left" ml={1}> {/* Adds spacing between icon and text */}
                            <Typography sx={{ fontFamily: 'Poppins', fontStyle: "normal", fontWeight: "400", fontSize: "12px", lineHeight: "18px", color: "#ADA4A5", }} variant="h6">Welcome Back! 👋</Typography>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: "700", fontSize: "20px", lineHeight: "30px", color: "#1D1617" }} fontSize="normal" variant="h6">John Doe</Typography>
                        </Box>
                    </IconButton>
                </Box>

                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
            </Box>
        </Box>
    )
}