import React, { useRef, useState } from "react";
import { IconButton, Slider, useTheme } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import PageWrapper from "./PageWrapper";
import WorkoutDescription from "./WorkoutDescription";

const CustomVideoPlayer = ({ src }) => {
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

    const skipTime = (seconds) => {
        videoRef.current.currentTime += seconds;
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
            <div style={{ position: "relative", width: "100%", margin: "auto", backgroundColor: theme.palette.background.default, minHeight: "100vh" }}>
                <video
                    loop
                    ref={videoRef}
                    src="https://res.cloudinary.com/dnlg8krv8/video/upload/v1742723244/3196220-uhd_3840_2160_25fps_qfnpwu.mp4"
                    onTimeUpdate={handleProgress}
                    style={{ width: "100%", height: "78vh", maxHeight: "700px", objectFit: "cover", borderRadius: "0" }}
                />

                {/* Custom Controls */}
                <div style={{ position: "absolute", bottom: "5rem", width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: "1rem", backgroundColor: theme.palette.background.paper, borderRadius: "12px" }}>
                    <Slider
                        value={progress}
                        onChange={handleSeek}
                        aria-labelledby="video-progress"
                        style={{ flexGrow: 1, marginLeft: 10, width: "100%", color: "#29E33C" }}
                    />

                    <IconButton onClick={() => skipTime(-10)} sx={{ color: theme.palette.text.primary }}>
                        <Replay10Icon />
                    </IconButton>

                    <IconButton onClick={togglePlayPause} sx={{ backgroundColor: "#29E33C", borderRadius: "14px", padding: "0.8rem", marginInline: "1rem" }}>
                        {playing ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>

                    <IconButton onClick={() => skipTime(10)} sx={{ color: theme.palette.text.primary }}>
                        <Forward10Icon />
                    </IconButton>
                </div>
            </div>
            <WorkoutDescription/>
        </PageWrapper>
    );
};

export default CustomVideoPlayer;