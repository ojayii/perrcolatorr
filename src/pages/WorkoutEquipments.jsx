import { Box, Typography, Checkbox, Button, Container, Card, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";


export default function WorkoutEquipments({ workoutType, setWorkout }) {
    const theme = useTheme();

    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const navigate = useNavigate();

    // const handleToggleEquipment = (equipment) => {
    //     setSelectedEquipment((prev) =>
    //         prev.includes(equipment)
    //             ? prev.filter((e) => e !== equipment)
    //             : [...prev, equipment]
    //     );
    // };

    const equipmentList = ["Dumbbells", "Skipping ropes", "Mat", "Bottle lift", "Band"];

    const handleToggleEquipment = (equipment) => {
        setSelectedEquipment((prev) =>
            prev.includes(equipment)
                ? prev.filter((e) => e !== equipment)
                : [...prev, equipment]
        );
    };

    const handleNext = () => {
        setWorkout({ type: workoutType, equipment: selectedEquipment });
        navigate("/create-plan");
    };

    return (
        <Box padding={2} pb={10} pt={"3rem"} bgcolor={theme.palette.background.default} minHeight={"100vh"} maxWidth={"30rem"} marginInline={"auto"} display={"flex"} flexDirection={"column"} >
            {/* <BackButton pageTitle={"Select Workout Equipment"} /> */}
            {/* <Typography fontWeight={600} mb={2}>Fullbody Workout</Typography> */}
            {/* <Typography fontWeight={500} mb={1}>Select Equipment</Typography> */}
            {/* <Container sx={{ padding: "0", display: "flex", flexWrap: "wrap", gap: "1rem", overflow: "hidden", alignItems: "flex-start", marginBottom: "3rem" }}>

                <Box sx={{ flexGrow: "1", height: "fit-content" }}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper, padding: "1.5rem", textAlign: "center" }} >
                        <FitnessCenterIcon sx={{ width: "4rem", height: "4rem" }} />
                    </Card>
                    <Typography>Dumbbells</Typography>
                    <Checkbox onChange={() => handleToggleEquipment("Dumbbells")} />
                </Box>


                <Box sx={{ flexGrow: "1" }}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper, padding: "1.5rem", textAlign: "center" }} >
                        <FitnessCenterIcon sx={{ width: "4rem", height: "4rem" }} />
                    </Card>
                    <Typography>Skipping ropes</Typography>
                    <Checkbox onChange={() => handleToggleEquipment("Skipping ropes")} />
                </Box>


                <Box sx={{ flexGrow: "1" }}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper, padding: "1.5rem", textAlign: "center" }} >
                        <FitnessCenterIcon sx={{ width: "4rem", height: "4rem" }} />
                    </Card>
                    <Typography>Mat</Typography>
                    <Checkbox onChange={() => handleToggleEquipment("Mat")} />
                </Box>


                <Box sx={{ flexGrow: "1" }}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper, padding: "1.5rem", textAlign: "center" }} >
                        <FitnessCenterIcon sx={{ width: "4rem", height: "4rem" }} />
                    </Card>
                    <Typography>Bottle lift</Typography>
                    <Checkbox onChange={() => handleToggleEquipment("Bottle lift")} />
                </Box>


                <Box sx={{ flexGrow: "1" }}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper, padding: "1.5rem", textAlign: "center" }} >
                        <FitnessCenterIcon sx={{ width: "4rem", height: "4rem" }} />
                    </Card>
                    <Typography>Band</Typography>
                    <Checkbox onChange={() => handleToggleEquipment("Band")} />
                </Box>
            </Container> */}

            <Container sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "flex-start",
                marginBottom: "3rem",
                padding: "0",
                marginBlock: { lg: "auto" }
            }}>
                {equipmentList.map((equipment) => (
                    <Button
                        key={equipment}
                        onClick={() => handleToggleEquipment(equipment)}
                        sx={{
                            flexGrow: "1",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: selectedEquipment.includes(equipment) ? "#1F8A27" : theme.palette.background.paper,
                            border: selectedEquipment.includes(equipment) ? "2px solid white" : "2px solid transparent",
                            color: "white",
                            // width: "100%",
                            minWidth: "100px",
                            height: "100px",
                            borderRadius: "10px",
                            transition: "0.3s",
                            '&:hover': {
                                backgroundColor: "green"
                            }
                        }}
                    >
                        <FitnessCenterIcon sx={{ width: "3rem", height: "3rem", mb: 1, color: theme.palette.text.primary }} />
                        <Typography fontSize={"0.7rem"} color={theme.palette.text.primary}>{equipment}</Typography>
                    </Button>
                    // <Box key={equipment} sx={{ flexGrow: 1, textAlign: "center" }}>
                    // </Box>
                ))}
            </Container>

            <Button
                onClick={handleNext}
                variant="contained" // MUI Button variant
                sx={{
                    // margiInline: "auto",
                    marginTop: "auto",
                    marginBottom: "2rem",
                    width: "100%",
                    borderRadius: "20px", // Rounded borders
                    padding: "10px 20px", // Adjust padding
                    backgroundColor: "#29E33C", // Background color
                    color: "white", // Text color
                    textTransform: "none", // Prevents uppercase text
                    "&:hover": { backgroundColor: "green" }, // Hover effect
                }}
            >
                Next
            </Button>
        </Box>
    )

}
