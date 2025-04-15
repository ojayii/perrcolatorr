import { Avatar, Box, Typography, IconButton, Card, CardContent, Button, Tabs, Tab, Grid2, useTheme } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add"; 
import PersonIcon from "@mui/icons-material/Person";
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import WorkoutChart from "../components/WorkoutChart";
import PageWrapper from "../components/PageWrapper";
import Loader from "../components/Loader";
import FavoriteButton from "../components/FavoriteButton";
import Categories from "../components/Categories";
import BackButton from "../components/BackButton";

export default function Dashboard() {
    const theme = useTheme();

    return (
        <PageWrapper>
            <Box sx={{ maxWidth: "60rem", margin: "0 auto", backgroundColor: theme.palette.background.default, color: "white", width: "100vw", minHeight: "100vh", padding: 2.5, pt: "3rem", paddingBottom: "6rem", }}>
                <Box marginBottom="1rem" display="flex" justifyContent="space-between" alignItems="center">
                    <Box display={"flex"} alignItems={"center"}>
                        <AccountCircleIcon sx={{ fontSize: 50, border: `2px solid ${theme.palette.accent}`, borderRadius: "50%", color: theme.palette.text.primary, }} /> {/* Profile Icon */}
                        <Box textAlign="left" ml={1}> {/* Adds spacing between icon and text */}
                            <Typography color= {theme.palette.text.primary} sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px" }}>Welcome Back! 👋</Typography>
                            <Typography color= {theme.palette.text.primary} lineHeight={"20px"} fontSize="15px" variant="h6">John Doe</Typography>
                        </Box>
                    </Box>

                    <Link to="/notifications" style={{ textDecoration: "none" }}>
                        <IconButton color="inherit">
                            <NotificationsIcon sx={{ color: theme.palette.accent }} />
                        </IconButton>
                    </Link>

                </Box>

                <WorkoutChart />
                <Categories />

            </Box>
        </PageWrapper>
    );
}
