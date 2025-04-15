import {
    Box, Card, Typography, IconButton, useTheme
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import BackButton from "../components/BackButton";

export default function Notifications() {
    const theme = useTheme();
    console.log("Current Theme Mode:", theme.palette.mode);

    return (
        <Box
            p={2}
            bgcolor={theme.palette.background.default}
            minHeight="100vh"
            pt="4rem"
            maxWidth="60rem"
            marginInline="auto"
        >
            <Card
                sx={{
                    borderRadius: "15px",
                    padding: "10px",
                    backgroundColor: theme.palette.background.paper,
                }}
            >
                {[
                    { text: "Congratulations, You have finished a workout!", time: "4 mins" },
                    { text: "You have successfully changed your password.", time: "30 mins ago" }
                ].map((item, index) => (
                    <Box key={index} display="flex" gap={1.5} alignItems="center" mb={1}>
                        <Card
                            sx={{
                                backgroundColor: theme.palette.grey[200],
                                padding: "1rem",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <ImageIcon sx={{ width: "2rem", height: "2rem", color: theme.palette.text.primary }} />
                        </Card>

                        <Box>
                            <Typography
                                sx={{
                                    maxWidth: { lg: "60rem", md: "160px", sm: "160px", xs: "160px" },
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    color: theme.palette.text.primary, 
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

                        <IconButton
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                padding: "12px",
                                marginLeft: "auto",
                                color: theme.palette.primary.main,
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
