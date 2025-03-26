import { Avatar, Box, Typography, IconButton, Card, CardContent, Button, Tabs, Tab, Grid2, useTheme } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add"; // Plus Icon
import PersonIcon from "@mui/icons-material/Person";
import React from 'react';
// import { Grid } from "@mui/material";
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
                {/* <Loader/> */}
                {/* <BackButton pageTitle="Activity"/> */}

                {/* Header */}
                <Box marginBottom="1rem" display="flex" justifyContent="space-between" alignItems="center">
                    <Box display={"flex"} alignItems={"center"}>
                        <AccountCircleIcon sx={{ fontSize: 50, border: "2px solid #29E33C", borderRadius: "50%", color: theme.palette.text.primary, }} /> {/* Profile Icon */}
                        <Box textAlign="left" ml={1}> {/* Adds spacing between icon and text */}
                            <Typography color= {theme.palette.text.primary} sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px" }}>Welcome Back! 👋</Typography>
                            <Typography color= {theme.palette.text.primary} lineHeight={"20px"} fontSize="15px" variant="h6">John Doe</Typography>
                        </Box>
                    </Box>

                    <Link to="/notifications" style={{ textDecoration: "none" }}>
                        <IconButton color="inherit">
                            <NotificationsIcon sx={{ color: "#29E33C" }} />
                        </IconButton>
                    </Link>

                </Box>


                {/* <Box width={"70%"} mb={2} maxWidth={"20rem"}>
                    <Typography fontWeight={"600"} fontSize={"25px"} lineHeight={"111.5%"} color="#F7F8FA" display={"inline"} >Always keep yourself safe and <span fontSize={"inherit"} fontWeight={"inherit"} color="#29E33C" display={"inline"}>Healthy.</span> </Typography>
                </Box> */}

                {/* <Card sx={{ backgroundColor: "#282A2C", borderRadius: "12px", padding: "17px", display: "flex", justifyContent: "space-between" }}>
                    <Box width={"62px"} height={"101px"} textAlign={"center"}>
                        <IconButton sx={{ color: "#FFFFFF", padding: "10px", backgroundColor: "#3A3A3A", marginBottom: "5px" }}>
                            <NotificationsIcon />
                        </IconButton>
                        <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#29E33C" marginBottom={"5px"}>60 KG</Typography>
                        <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#FFFFFF">Weight</Typography>
                    </Box>
                    <Box width={"62px"} height={"101px"} textAlign={"center"}>
                        <IconButton sx={{ color: "#FFFFFF", padding: "10px", backgroundColor: "#3A3A3A", marginBottom: "5px" }}>
                            <NotificationsIcon />
                        </IconButton>
                        <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#29E33C" marginBottom={"5px"}>5.6 Ft</Typography>
                        <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#FFFFFF">Height</Typography>
                    </Box>
                    <Box width={"62px"} height={"101px"} textAlign={"center"}>
                        <IconButton sx={{ color: "#FFFFFF", padding: "10px", backgroundColor: "#3A3A3A", marginBottom: "5px" }}>
                            <NotificationsIcon />
                        </IconButton>
                        <Typography fontWeight={"600"} fontSize={"16px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#29E33C" marginBottom={"5px"}>25 year</Typography>
                        <Typography fontSize={"13px"} lineHeight={"20px"} letterSpacing={"0.01em"} color="#FFFFFF">Age</Typography>
                    </Box>
                </Card> */}

                <WorkoutChart />
                <Categories />


                {/* <Card sx={{ mt: "15px", bgcolor: "#1e1e1e", padding: "15px", display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "20px" }}>
                    <Box>
                        <Typography color="white" mb={1}>BMI (Body Mass Index)</Typography>
                        <Typography color="white" fontSize={12}>You have a normal weight</Typography>
                        <Typography color="white" fontSize={12}>View more</Typography>
                    </Box>
                    <Box sx={{ height: "60px", width: "60px", borderRadius: "50%", backgroundColor: "blue" }}></Box>
                </Card> */}

                {/* Workout Programs */}
                

                {/* Bottom Navigation */}
                {/* <Navbar/> */}
            </Box>
        </PageWrapper>
    );
}
