import React, { useState } from "react";
import { Box, IconButton, Typography, Slider, Avatar, Card, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

import BackButton  from "./BackButton";
import Navbar from "./Navbar";
import MusicPlayer from "../components/MusicPlayer";
import PageWrapper from "./PageWrapper";


const workouts = [
    {
        title: "Jump Squats (Legs, Glutes, Core)",
        description: [
            "Stand with feet shoulder-width apart.",
            "Lower into a squat by bending your knees and pushing your hips back.",
            "Explode upward, jumping as high as possible.",
            "Land softly and immediately go into the next squat.",
        ],
        reps: "12–15 reps",
    },
    {
        title: "Push-Ups (Chest, Arms, Core)",
        description: [
            "Get into a high plank position, with hands slightly wider than shoulders.",
            "Keep your body straight and engage your core.",
            "Lower your chest toward the floor.",
            "Push back up to the starting position.",
        ],
        reps: "10–15 reps",
    },
    {
        title: "Plank (Core, Shoulders, Back)",
        description: [
            "Get into a forearm plank position, keeping your body straight.",
            "Engage your core and hold the position.",
            "Avoid dropping your hips or raising your butt too high.",
        ],
        reps: "Hold for 30–60 seconds",
    },
    {
        title: "Lunges (Legs, Glutes, Core)",
        description: [
            "Step forward with one leg and lower your hips until both knees form 90-degree angles.",
            "Keep your chest upright and engage your core.",
            "Push back up to the starting position and switch legs.",
        ],
        reps: "10 per leg",
    },
    {
        title: "Burpees (Full Body, Cardio)",
        description: [
            "Start in a standing position.",
            "Drop into a squat and place your hands on the ground.",
            "Kick your feet back into a plank position.",
            "Perform a push-up.",
            "Jump back to a squat and explode into a jump.",
        ],
        reps: "10 reps",
    },
];

const FullBodyWorkout = () => {
    return (
        <Container sx={{width: "100%", padding: "0"}}>
            <MusicPlayer/>

            {workouts.map((exercise, index) => (
                <Accordion key={index} sx={{ mb: 1, backgroundColor: "#282A2C", borderRadius: "12px" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}>
                        {/* <FitnessCenterIcon sx={{ mr: 1, color: "primary.main" }} /> */}
                        <Typography variant="h6" color="white" fontSize={16} fontWeight={"normal"}>{exercise.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {exercise.description.map((step, i) => (
                                <Typography key={i} color="white" pl={2} variant="body1">{step}</Typography>
                                // <Typography key={i} >
                                // </Typography>
                            ))}
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold" color="#29E33C">
                            {exercise.reps}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
};

const VideoPlayer = () => {
    const [playing, setPlaying] = useState(false);

    const togglePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        // <Box
        //     sx={{
        //         position: "relative",
        //         width: "100%",
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "space-between",
        //         backgroundColor: "#000",
        //     }}
        // >
        //     {/* Video Background using react-player */}
        //     <ReactPlayer
        //         url="https://res.cloudinary.com/dnlg8krv8/video/upload/v1742723244/3196220-uhd_3840_2160_25fps_qfnpwu.mp4"
        //         playing={true}   // Auto-play
        //         loop={true}      // Loop the video
        //         controls={true}  // Show controls
        //         width="100%"
        //         // height="100%"
        //     />



        //     {/* Profile Icon */}
        //     {/* <Avatar
        //         src="https://randomuser.me/api/portraits/women/44.jpg"
        //         sx={{
        //             position: "absolute",
        //             top: 10,
        //             right: 10,
        //             width: 50,
        //             height: 50,
        //             border: "2px solid white",
        //         }}
        //     /> */}

        //     {/* Timer & Progress Bar */}
        //     <Typography>YOOO</Typography>
        // </Box>
        <PageWrapper>
            <Box p={2} pb={13} bgcolor={"black"}>
                <BackButton pageTitle="Workout"/>

                <Card sx={{ borderRadius: "15px", height: "max-content", backgroundColor: "black" }}>
                    <iframe
                        src="https://player.cloudinary.com/embed/?cloud_name=dnlg8krv8&public_id=3196220-uhd_3840_2160_25fps_qfnpwu&player[showJumpControls]=true&player[hideContextMenu]=true&player[colors][accent]=%2329E33C&player[colors][text]=%2329E33C"
                        width="100%"
                        height="100%"
                        style={{ height: "100%", width: "100%", aspectRatio: "640 / 360" }}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                    ></iframe>

                </Card>

                <Typography fontSize={17} mt={2} fontWeight={600}>Upperbody workout</Typography>
                <Typography fontSize={14} mb={3} fontWeight={500}>3 mins</Typography>
                <Typography fontSize={17} mb={1} fontWeight={600}>Description</Typography>
                <Typography fontSize={14} mb={3} fontWeight={500}>A full-body workout is a well-rounded exercise session that targets multiple muscle groups, improving strength, endurance, and flexibility. This type of workout is great for beginners and advanced athletes alike, helping build muscle, burn fat, and improve overall fitness.</Typography>

                <Box mb={2} display={"flex"} justifyContent={"space-between"}>
                    <Typography fontSize={17} fontWeight={600}>Instructions</Typography>
                    <Typography fontSize={14} fontWeight={500}>5 Steps</Typography>
                </Box>

                <FullBodyWorkout/>

                {/* <Navbar/> */}
            </Box>
        </PageWrapper>
    );
};

export default VideoPlayer;
