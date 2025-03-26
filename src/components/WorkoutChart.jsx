import React from "react";
import { Line } from "react-chartjs-2";
import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WorkoutChart = () => {
    const theme = useTheme();
    // Dummy workout data (Replace with actual data from your backend)
    const workoutData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
        datasets: [
            {
                data: [30, 45, 20, 50, 40, 60, 35], // Workout duration in minutes
                borderColor: "#29E33C",
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                tension: 0.4, // Smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hides the legend (checkbox thing)
            },
        },
        scales: {
            x: {
                ticks: { color: theme.palette.text.primary },
                grid: { display: false },
            },
            y: {
                ticks: { color: theme.palette.text.primary },
                // grid: { display: false },
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
                    <Typography color= {theme.palette.text.primary} fontSize={10} fontWeight={300}>Total time</Typography>
                    <Stack direction={"row"} gap={1} fontSize={16}>
                        <FavoriteIcon sx={{ color: "#29E33C" }} />
                        <Typography color= {theme.palette.text.primary} fontSize={16} fontWeight={500}>20 mins</Typography>
                    </Stack>
                </Card>
                <Card sx={{ flexGrow: "1", backgroundColor: theme.palette.background.paper, padding: "1rem", borderRadius: "12px" }}>
                    <Typography color= {theme.palette.text.primary} fontSize={10} fontWeight={300}>Total Time</Typography>
                    <Stack direction={"row"} gap={1} fontSize={16}>
                        <FavoriteIcon sx={{ color: "#29E33C" }} />
                        <Typography color= {theme.palette.text.primary} fontSize={16} fontWeight={500}>44 mins</Typography>
                    </Stack>
                </Card>
                <Card sx={{ flexGrow: "1", backgroundColor: theme.palette.background.paper, padding: "1rem", borderRadius: "12px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography color= {theme.palette.text.primary} fontSize={10} fontWeight={300}>Highest Type</Typography>
                    <Stack direction={"row"} gap={1} fontSize={16}>
                        <FavoriteIcon sx={{ color: "#29E33C" }} />
                        <Typography color= {theme.palette.text.primary} fontSize={16} fontWeight={500}>Full Body</Typography>
                    </Stack>
                </Card>
            </Stack>
        </Box>
    );
};

export default WorkoutChart;
