import { Box, Typography, Checkbox, Button, Container, Card, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function WorkoutEquipments({ workoutType, setWorkout }) {
    const theme = useTheme();

    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const navigate = useNavigate();

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
        <PageWrapper>
            <Box padding={2} pb={10} pt={"3rem"} bgcolor={theme.palette.background.default} minHeight={"100vh"} maxWidth={"30rem"} marginInline={"auto"} display={"flex"} flexDirection={"column"} >

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
                                backgroundColor: selectedEquipment.includes(equipment) ? theme.palette.accent : theme.palette.background.paper,
                                border: selectedEquipment.includes(equipment) ? "2px solid white" : "2px solid transparent",
                                color: "white",
                                minWidth: "100px",
                                height: "100px",
                                borderRadius: "10px",
                                transition: "0.3s",
                                '&:hover': {
                                    backgroundColor: theme.palette.accent
                                }
                            }}
                        >
                            <FitnessCenterIcon sx={{ width: "3rem", height: "3rem", mb: 1, color: theme.palette.text.primary }} />
                            <Typography fontSize={"0.7rem"} color={theme.palette.text.primary}>{equipment}</Typography>
                        </Button>
                    ))}
                </Container>

                <Button
                    onClick={handleNext}
                    variant="contained"
                    sx={{
                        marginTop: "auto",
                        marginBottom: "2rem",
                        width: "100%",
                        borderRadius: "20px", 
                        padding: "10px 20px", 
                        backgroundColor: theme.palette.accent,
                        color: "white", 
                        textTransform: "none",
                        "&:hover": { backgroundColor: theme.palette.accent },
                    }}
                >
                    Next
                </Button>
            </Box>
        </PageWrapper>
    )

}
