import React, { useRef, useState } from "react";
import { IconButton, Slider, Typography, useTheme } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import FavoriteButton from "./FavoriteButton";

const Short = ({ src }) => {
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
        <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto", backgroundColor: theme.palette.background.default, minHeight: "100vh" }}>
            <video
                loop
                autoPlay
                ref={videoRef}
                src="https://res.cloudinary.com/dnlg8krv8/video/upload/v1742723244/3196220-uhd_3840_2160_25fps_qfnpwu.mp4"
                onTimeUpdate={handleProgress}
                style={{ width: "100%", height: "100vh", objectFit: "cover", borderRadius: "0" }}
            />

            {/* Custom Controls */}

            {/* <IconButton sx={{ color: "#29E33C", position: "absolute", right: "1rem", top: "60%", transform: "translateY(-40%)" }}>
                <FavoriteButton style={{ width: "4rem", height: "4rem" }} />
            </IconButton> */}
            <IconButton sx={{ color: "#29E33C", position: "absolute", right: "1rem", top: "80%", transform: "translateY(-20%)" }}>
                <FavoriteButton style={{ width: "4rem", height: "4rem" }} />
            </IconButton>
            <div style={{ position: "absolute", bottom: "4rem", width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}>
                <Typography ml={1} width={"100%"}>FullBody Workout</Typography>
                <Typography ml={1} width={"100%"}>Russian Twists - 15 reps per side</Typography>
                <Slider
                    value={progress}
                    onChange={handleSeek}
                    aria-labelledby="video-progress"
                    style={{ marginInline: "auto", width: "95%", color: "#29E33C" }}
                />

            </div>
            <IconButton onClick={togglePlayPause} sx={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", borderRadius: "50%", padding: "0.8rem", marginInline: "1rem" }}>
                {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
        </div>
    );
};

export default Short;