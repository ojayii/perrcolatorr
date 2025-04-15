import React, { useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { PlayArrow, Close } from "@mui/icons-material";

const MusicPlayer = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ backgroundColor: "transparent" }}>
            <IconButton
                sx={{
                    position: "fixed",
                    zIndex: "100",
                    bottom: 80,
                    right: 20,
                    bgcolor: theme.palette.accent,
                    color: "white",
                    p: 2,
                    borderRadius: "50%",
                    boxShadow: 3,
                    "&:hover": { bgcolor: theme.palette.accent },
                    boxShadow: `0px 0px 15px ${theme.palette.accent}`
                }}
                onClick={() => setOpen(!open)}
            >
                {open ? <Close /> : <PlayArrow />}
            </IconButton>

            <Box sx={{
                display: open ? "block" : "none",
                "&::after": {
                    content: { lg: "none", md: '""', sm: '""', xs: '""' },
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
                    zIndex: "10",
                },
            }}>
                <iframe
                    style={{
                        position: "fixed",
                        right: "1rem",
                        top: "1rem",
                        bottom: "9rem",
                        width: "300px",
                        height: "75vh",
                        border: "none",
                        zIndex: "99",
                        backgroundColor: "transparent",
                    }}
                    src="https://open.spotify.com/embed/album/3VQUoZhU8fFA2c9vg8joqF?utm_source=generator&theme=0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>

            </Box>
        </Box>
    );
};

export default MusicPlayer;
