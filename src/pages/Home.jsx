import { Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    const theme = useTheme();
    return (
        <Box>
            Landing page
            <Link to="/login" >Log in</Link>
            <Link to="/signup">Sign up</Link>
        </Box >
    )
}