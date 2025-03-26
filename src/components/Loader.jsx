import { Box } from "@mui/material"

export default function Loader() {
    return (
        <Box
            sx={{ position: "fixed", top: "0", left: "0", height: "100vh", width: "100vw", backgroundColor: "#5C4033", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "1000" }}
        >
            <iframe
            style = {{
                border: "none",
            }}
             src="https://lottie.host/embed/23e311da-ae91-40eb-9548-c58f534eb7bf/NCmBLeRCHO.lottie"></iframe>
        </Box>
    )
}