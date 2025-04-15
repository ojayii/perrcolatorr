import React from "react";
import { Line } from "react-chartjs-2";
import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import NumbersIcon from "@mui/icons-material/Numbers";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WorkoutChart = () => {
    const theme = useTheme();
    const workoutData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
        datasets: [
            {
                data: [30, 45, 20, 50, 40, 60, 35], 
                borderColor: theme.palette.accent,
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: { color: theme.palette.text.primary },
                grid: { display: false },
            },
            y: {
                ticks: { color: theme.palette.text.primary },
                grid: { color: "rgba(255, 255, 255, 0.2)" },
            },
        },
    };



    return (
        <Box>
            <Card sx={{ backgroundColor: theme.palette.background.paper, p: 2, mb: 2, borderRadius: "12px" }}>
                <CardContent>
                    <Stack mb={1} direction={"row"} justifyContent={"space-between"}>
                        <Typography color={theme.palette.text.primary} fontSize={15} fontWeight={"500"} variant="h6" gutterBottom>
                            Workout Progress
                        </Typography>
                        <Box>
                            <Typography color={theme.palette.text.primary} fontSize={12} fontWeight={"300"}>
                                Weekly Average
                            </Typography>
                            <Box display={"flex"} justifyContent={"flex-end"} gap={"3px"} alignItems={"flex-end"}>
                                <Typography color={theme.palette.text.primary} fontSize={23} fontWeight={"500"} lineHeight={1}>30 </Typography>
                                <Typography color={theme.palette.text.primary} fontSize={12} fontWeight={"300"} >mins</Typography>
                            </Box>
                        </Box>
                    </Stack>
                    <Box bgcolor={"inherit"} sx={{ height: 200 }}>
                        <Line data={workoutData} options={options} />
                    </Box>
                </CardContent>
            </Card>
            <Stack direction={"column-reverse"} gap={1} height={"10rem"} flexWrap={"wrap"}>
                <Card sx={{ flexGrow: "1", backgroundColor: theme.palette.background.paper, padding: "1rem", borderRadius: "12px" }}>
                    <Typography color= {theme.palette.text.primary} fontSize={10} fontWeight={300}>Total Videos</Typography>
                    <Stack direction={"row"} gap={1} fontSize={16}>
                        <NumbersIcon sx={{ color: theme.palette.accent }} />
                        <Typography color= {theme.palette.text.primary} fontSize={16} fontWeight={500}>20</Typography>
                    </Stack>
                </Card>
                <Card sx={{ flexGrow: "1", backgroundColor: theme.palette.background.paper, padding: "1rem", borderRadius: "12px" }}>
                    <Typography color= {theme.palette.text.primary} fontSize={10} fontWeight={300}>Total Time</Typography>
                    <Stack direction={"row"} gap={1} fontSize={16}>
                        <AccessTimeIcon sx={{ color: theme.palette.accent }} />
                        <Typography color= {theme.palette.text.primary} fontSize={16} fontWeight={500}>44 mins</Typography>
                    </Stack>
                </Card>
                <Card sx={{ flexGrow: "1", backgroundColor: theme.palette.background.paper, padding: "1rem", borderRadius: "12px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography color= {theme.palette.text.primary} fontSize={10} fontWeight={300}>Highest Type</Typography>
                    <Stack direction={"row"} gap={1} fontSize={16}>
                        <AutorenewIcon sx={{ color: theme.palette.accent }} />
                        <Typography color= {theme.palette.text.primary} fontSize={16} fontWeight={500}>Full Body</Typography>
                    </Stack>
                </Card>
            </Stack>
        </Box>
    );
};

export default WorkoutChart;
