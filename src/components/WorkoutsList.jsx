import React from "react";
import workouts from "../data/workoutData";
import { Card, CardMedia, CardContent, Typography, Button, Grid2 } from "@mui/material";

const WorkoutsList = () => {
    return (
        <Grid2 container spacing={2}>
            {workouts.map((workout) => (
                <Grid2 item xs={12} sm={6} md={4} key={workout.id}>
                    <Card>
                        <CardMedia component="img" height="180" image={workout.thumbnail} alt={workout.title} />
                        <CardContent>
                            <Typography variant="h6">{workout.title}</Typography>
                            <Typography variant="body2">Duration: {workout.duration / 60} mins</Typography>
                            <Typography variant="body2">Equipment: {workout.equipment.join(", ")}</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href={workout.video_src}
                                target="_blank"
                                sx={{ marginTop: 1 }}
                            >
                                Watch Workout
                            </Button>
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default WorkoutsList;
