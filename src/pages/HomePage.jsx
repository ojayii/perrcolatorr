import React, { useRef, useState } from "react";
import { IconButton, Slider, Box, Button, Stack, useTheme } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import BackButton from "../components/BackButton";
import MusicPlayer from "../components/MusicPlayer";
import FavoriteButton from "../components/FavoriteButton";
import PageWrapper from "../components/PageWrapper";

const HomePage = ({ src }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlayPause = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    const handleSkip = () => {
        console.log("Skipped");

    };

    const handlePrev = () => {
        console.log("Skipped");

    };

    const handleProgress = () => {
        const percentage =
            (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percentage);
    };

    const handleSeek = (event, newValue) => {
        const newTime = (newValue / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(newValue);
    };

    const theme = useTheme();

    return (
        <PageWrapper>
            <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto", padding: "1.5rem", paddingTop: "3rem", backgroundColor: theme.palette.background.default, minHeight: "100vh" }}>
                <MusicPlayer />
                <Box sx={{ position: "absolute", top: "4rem", right: "2.5rem", color: theme.palette.accent }}>
                    <FavoriteButton />
                </Box>
                <video
                    ref={videoRef}
                    // autoPlay
                    loop
                    src="https://res.cloudinary.com/dnlg8krv8/video/upload/v1742723244/3196220-uhd_3840_2160_25fps_qfnpwu.mp4"
                    onTimeUpdate={handleProgress}
                    style={{ width: "100%", height: "15rem", objectFit: "cover", borderRadius: "0" }}
                />

                <Stack mt={3} mb={2} direction={"row"} flexWrap={"wrap"} gap={3} justifyContent={"space-evenly"} >
                    <Button sx={{ color: theme.palette.text.primary, fontSize: "13px", fontWeight: "500", width: "4rem", height: "4rem", border: "2px solid", borderColor: theme.palette.text.primary, borderRadius: "50%" }}>Floor</Button>
                    <Button sx={{ color: theme.palette.text.primary, fontSize: "13px", fontWeight: "500", width: "4rem", height: "4rem", border: "2px solid", borderColor: theme.palette.text.primary, borderRadius: "50%" }}>Mat</Button>
                    <Button sx={{ color: theme.palette.text.primary, fontSize: "13px", fontWeight: "500", width: "4rem", height: "4rem", border: "2px solid", borderColor: theme.palette.text.primary, borderRadius: "50%" }}>Rope</Button>
                    <Button sx={{ color: theme.palette.text.primary, fontSize: "13px", fontWeight: "500", width: "4rem", height: "4rem", border: "2px solid", borderColor: theme.palette.text.primary, borderRadius: "50%" }}>Bells</Button>
                    <Button sx={{ color: theme.palette.text.primary, fontSize: "13px", fontWeight: "500", width: "4rem", height: "4rem", border: "2px solid", borderColor: theme.palette.text.primary, borderRadius: "50%" }}>Ball</Button>
                    <Button sx={{ color: theme.palette.text.primary, fontSize: "13px", fontWeight: "500", width: "4rem", height: "4rem", border: "2px solid", borderColor: theme.palette.text.primary, borderRadius: "50%" }}>Jug</Button>
                </Stack >

                <div style={{ position: "", bottom: "5rem", width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: "1rem", backgroundColor: "", borderRadius: "12px" }}>
                    <Slider
                        value={progress}
                        onChange={handleSeek}
                        aria-labelledby="video-progress"
                        style={{ flexGrow: 1, width: "100%", color: theme.palette.accent }}
                    />

                    <IconButton onClick={() => handlePrev()} sx={{ color: "white" }}>
                        <SkipPreviousIcon />
                    </IconButton>

                    <IconButton onClick={togglePlayPause} sx={{ backgroundColor: theme.palette.accent, borderRadius: "50%", padding: "0.8rem", marginInline: "1rem", color: theme.palette.text.primary }}>
                        {playing ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>

                    <IconButton onClick={() => handlePrev()} sx={{ color: "white" }}>
                        <SkipNextIcon />
                    </IconButton>
                </div>
            </div>
        </PageWrapper>
    );
};

export default HomePage;