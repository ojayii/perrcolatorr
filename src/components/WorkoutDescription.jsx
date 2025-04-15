import { Container, Accordion, AccordionSummary, Typography, AccordionDetails, Box, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MusicPlayer from "./MusicPlayer";

const workouts = [
    {
        title: "Jump Squats (Legs, Glutes, Core)",
        description: [
            "Stand with feet shoulder-width apart.",
            "Lower into a squat by bending your knees and pushing your hips back.",
            "Explode upward, jumping as high as possible.",
            "Land softly and immediately go into the next squat.",
        ],
        reps: "12–15 reps",
    },
    {
        title: "Push-Ups (Chest, Arms, Core)",
        description: [
            "Get into a high plank position, with hands slightly wider than shoulders.",
            "Keep your body straight and engage your core.",
            "Lower your chest toward the floor.",
            "Push back up to the starting position.",
        ],
        reps: "10–15 reps",
    },
    {
        title: "Plank (Core, Shoulders, Back)",
        description: [
            "Get into a forearm plank position, keeping your body straight.",
            "Engage your core and hold the position.",
            "Avoid dropping your hips or raising your butt too high.",
        ],
        reps: "Hold for 30–60 seconds",
    },
    {
        title: "Lunges (Legs, Glutes, Core)",
        description: [
            "Step forward with one leg and lower your hips until both knees form 90-degree angles.",
            "Keep your chest upright and engage your core.",
            "Push back up to the starting position and switch legs.",
        ],
        reps: "10 per leg",
    },
    {
        title: "Burpees (Full Body, Cardio)",
        description: [
            "Start in a standing position.",
            "Drop into a squat and place your hands on the ground.",
            "Kick your feet back into a plank position.",
            "Perform a push-up.",
            "Jump back to a squat and explode into a jump.",
        ],
        reps: "10 reps",
    },
];

const WorkoutDescription = () => {
    const theme = useTheme();
    return (
        <Container sx={{width: "100%", maxWidth: "60rem", padding: "0 10px 5rem 10px", backgroundColor: theme.palette.background.default}}>
            <MusicPlayer/>

            {workouts.map((exercise, index) => (
                <Accordion key={index} sx={{ mb: 1, backgroundColor: theme.palette.background.paper, borderRadius: "12px" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.text.primary}}/>}>
                        <Typography variant="h6" color={theme.palette.text.primary} fontSize={16} fontWeight={"normal"}>{exercise.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {exercise.description.map((step, i) => (
                                <Typography key={i} color={theme.palette.text.primary} pl={2} variant="body1">{step}</Typography>
                            ))}
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.accent}>
                            {exercise.reps}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
};

export default WorkoutDescription;