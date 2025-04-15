import { Box, Card, Typography, Stack, Button, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import ImageIcon from "@mui/icons-material/Image";

export default function Categories() {
    const theme = useTheme();
    return (
        <Box>
            <Typography color= {theme.palette.text.primary} pt={2} pb={1}>Categories</Typography>
            <Box
                sx={{
                    display: "flex", 
                    gap: { lg: 2, md: 1, sm: 1, xs: 1 },
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                <Link to="/shorts" style={{ textDecoration: "none", flexGrow: "1" }}>
                    <Card sx={{ padding: "1rem", borderRadius: "12px", backgroundColor: theme.palette.background.paper, width: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography color= {theme.palette.text.primary} textDecoration="none">Floor</Typography>
                        <ImageIcon sx={{ width: "4rem", height: "4rem", color: theme.palette.text.primary, margin: "0 auto" }} />
                    </Card>
                </Link>
                <Link to="/shorts" style={{ textDecoration: "none", flexGrow: "1" }}>
                    <Card sx={{ padding: "1rem", borderRadius: "12px", backgroundColor: theme.palette.background.paper, width: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography color= {theme.palette.text.primary} textDecoration="none">Mat</Typography>
                        <ImageIcon sx={{ width: "4rem", height: "4rem", color: theme.palette.text.primary, margin: "0 auto" }} />
                    </Card>
                </Link>
                <Link to="/shorts" style={{ textDecoration: "none", flexGrow: "1" }}>
                    <Card sx={{ padding: "1rem", borderRadius: "12px", backgroundColor: theme.palette.background.paper, width: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography color= {theme.palette.text.primary} textDecoration="none">Ropes</Typography>
                        <ImageIcon sx={{ width: "4rem", height: "4rem", color: theme.palette.text.primary, margin: "0 auto" }} />
                    </Card>
                </Link>
                <Link to="/shorts" style={{ textDecoration: "none", flexGrow: "1" }}>
                    <Card sx={{ padding: "1rem", borderRadius: "12px", backgroundColor: theme.palette.background.paper, width: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography color= {theme.palette.text.primary} textDecoration="none">Dumbbells</Typography>
                        <ImageIcon sx={{ width: "4rem", height: "4rem", color: theme.palette.text.primary, margin: "0 auto" }} />
                    </Card>
                </Link>
                <Link to="/shorts" style={{ textDecoration: "none", flexGrow: "1" }}>
                    <Card sx={{ padding: "1rem", borderRadius: "12px", backgroundColor: theme.palette.background.paper, width: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography color= {theme.palette.text.primary} textDecoration="none">Ball</Typography>
                        <ImageIcon sx={{ width: "4rem", height: "4rem", color: theme.palette.text.primary, margin: "0 auto" }} />
                    </Card>
                </Link>
                <Link to="/shorts" style={{ textDecoration: "none", flexGrow: "1" }}>
                    <Card sx={{ padding: "1rem", borderRadius: "12px", backgroundColor: theme.palette.background.paper, width: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography color= {theme.palette.text.primary} textDecoration="none">Bottle</Typography>
                        <ImageIcon sx={{ width: "4rem", height: "4rem", color: theme.palette.text.primary, margin: "0 auto" }} />
                    </Card>
                </Link>
            </Box>
        </Box>
    )
}