import { BrowserRouter, Routes, Route, useLocation, HashRouter as Router  } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Workouts from "./pages/Workouts";
import CreatePlan from "./pages/CreatePlan";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import WorkoutEquipments from "./pages/WorkoutEquipments";
import WorkoutType from "./pages/WorkoutType";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import CustomVideoPlayer from "./components/CustomVideoPlayer";
import Short from "./components/short";
import ShortsPlayer from "./components/ShortsPlayer";
import HomePage from "./pages/HomePage";
import { ThemeProvider, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import BackButton from "./components/BackButton";
import Loader from "./components/Loader";

function AnimatedRoutes() {
  const location = useLocation();
  const [workoutType, setWorkoutType] = useState("");
  const [workout, setWorkout] = useState({ type: "", equipment: [] });

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Activity />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/activity" element={<Activity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/workout-type"
          element={<WorkoutType setWorkoutType={setWorkoutType} />}
        />
        <Route
          path="/workout-equipments"
          element={<WorkoutEquipments workoutType={workoutType} setWorkout={setWorkout} />}
        />
        <Route path="/create-plan" element={<CreatePlan workout={workout} />} />
        {/* <Route path="/video" element={<VideoPlayer workout={workout} />} /> */}
        <Route path="/video" element={<CustomVideoPlayer />} />
        {/* <Route path="/video" element={<Short/>} /> */}
        <Route path="/shorts" element={<ShortsPlayer />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // Detect system preference for the first load
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Load theme from local storage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) ?? systemPrefersDark;
  });

  // Save user preference in local storage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  console.log(darkMode);
  // const theme = useTheme();

  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulated delay
  }, []);


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Resets default styles */}
        <Box sx={{ backgroundColor: darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default, minHeight: "100vh", minWidth: "100vw", }}>
          <Navbar />
          <BackButton darkMode={darkMode} setDarkMode={setDarkMode} />
          {loading ? <Loader /> : <AnimatedRoutes />}
        </Box>
    </ThemeProvider>
  );
}
