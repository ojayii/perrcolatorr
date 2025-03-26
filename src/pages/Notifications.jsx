import {
    Box, Card, Typography, IconButton, useTheme
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import BackButton from "../components/BackButton";

export default function Notifications() {
    const theme = useTheme(); // Get the active theme (light/dark)
    console.log("Current Theme Mode:", theme.palette.mode);

    return (
        <Box
            p={2}
            bgcolor={theme.palette.background.default} // Uses theme background
            minHeight="100vh"
            pt="4rem"
            maxWidth="60rem"
            marginInline="auto"
        >
            {/* <BackButton pageTitle="Notifications" /> */}

            <Card
                sx={{
                    borderRadius: "15px",
                    padding: "10px",
                    backgroundColor: theme.palette.background.paper, // Uses theme paper color
                }}
            >
                {/* Notification Item */}
                {[
                    { text: "Congratulations, You have finished a workout!", time: "4 mins" },
                    { text: "You have successfully changed your password.", time: "30 mins ago" }
                ].map((item, index) => (
                    <Box key={index} display="flex" gap={1.5} alignItems="center" mb={1}>
                        {/* Icon Wrapper */}
                        <Card
                            sx={{
                                backgroundColor: theme.palette.grey[200], // Light background for icon
                                padding: "1rem",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <ImageIcon sx={{ width: "2rem", height: "2rem", color: theme.palette.text.primary }} />
                        </Card>

                        {/* Notification Text */}
                        <Box>
                            <Typography
                                sx={{
                                    maxWidth: { lg: "60rem", md: "160px", sm: "160px", xs: "160px" },
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    color: theme.palette.text.primary, // Uses theme text color
                                }}
                                fontSize={16}
                                fontWeight={600}
                            >
                                {item.text}
                            </Typography>

                            <Typography fontSize={14} fontWeight={500} color={theme.palette.text.secondary}>
                                {item.time}
                            </Typography>
                        </Box>

                        {/* Options Button */}
                        <IconButton
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                padding: "12px",
                                marginLeft: "auto",
                                color: theme.palette.primary.main, // Uses primary color
                            }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </Box>
                ))}
            </Card>
        </Box>
    );
}
