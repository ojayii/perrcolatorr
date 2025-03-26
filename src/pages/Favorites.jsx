import { Container, Typography, Box, Card, IconButton, Tab, Tabs, useTheme } from '@mui/material';
import ImageIcon from "@mui/icons-material/Image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BackButton from '../components/BackButton';
import PageWrapper from '../components/PageWrapper';

export default function Favorites() {
  const theme = useTheme();
  return (
    <PageWrapper>
      <Box p={2} pb={8} pt={"3rem"} bgcolor={theme.palette.background.default} minHeight={"100vh"} maxWidth={"60rem"} marginInline={"auto"}>
        {/* <BackButton pageTitle={"Favorites"} /> */}

        {/* <Typography fontSize={16} fontWeight={600} color='#f5f5f5' mb={1}>Favourites</Typography> */}
        <Tabs value={0} textColor="inherit" indicatorColor="none" sx={{ overflowx: "scroll", "& .Mui-selected": { bgcolor: "secondary", color: theme.palette.text.primary } }}>
          <Tab sx={{ bgcolor: theme.palette.background.paper, borderRadius: "8px", padding: "5px 10px", minHeight: "auto", height: "40px", marginRight: "10px", "&.Mui-selected": { bgcolor: "#29E33C", color: theme.palette.text.primary } }} label="All" />
          <Tab sx={{ bgcolor: theme.palette.background.paper, borderRadius: "8px", padding: "5px 10px", minHeight: "auto", height: "40px", marginRight: "10px", "&.Mui-selected": { bgcolor: "#29E33C", color: theme.palette.text.primary } }} label="Workouts" />
          <Tab sx={{ bgcolor: theme.palette.background.paper, borderRadius: "8px", padding: "5px 10px", minHeight: "auto", height: "40px", marginRight: "10px", "&.Mui-selected": { bgcolor: "#29E33C", color: theme.palette.text.primary } }} label="Shorts" />
        </Tabs>
        <Card sx={{ borderRadius: "15px", padding: "10px", backgroundColor: theme.palette.background.paper }}>
          <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
            <Card sx={{ backgroundColor: theme.palette.background.default, padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
              <ImageIcon sx={{ width: "2rem", height: "2rem" }} />
            </Card>
            <Box>
              <Typography fontSize={16} fontWeight={600} color= {theme.palette.text.primary}>Jump squats</Typography>
              <Typography fontSize={14} fontWeight={500} color= {theme.palette.text.primary}>1:30 mins</Typography>
            </Box>
            <IconButton sx={{ backgroundColor: theme.palette.background.paper, padding: "12px", border: "2px solid #29E33C", marginLeft: "auto", color: "#29E33C" }}>
              <PlayArrowIcon />
            </IconButton>
          </Box>
          <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
            <Card sx={{ backgroundColor: theme.palette.background.default, padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
              <ImageIcon sx={{ width: "2rem", height: "2rem" }} />
            </Card>
            <Box>
              <Typography fontSize={16} fontWeight={600} color= {theme.palette.text.primary}>Body Building</Typography>
              <Typography fontSize={14} fontWeight={500} color= {theme.palette.text.primary}>1:30 mins</Typography>
            </Box>
            <IconButton sx={{ backgroundColor: theme.palette.background.paper, padding: "12px", border: "2px solid #29E33C", marginLeft: "auto", color: "#29E33C" }}>
              <PlayArrowIcon />
            </IconButton>
          </Box>
          <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
            <Card sx={{ backgroundColor: theme.palette.background.default, padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
              <ImageIcon sx={{ width: "2rem", height: "2rem" }} />
            </Card>
            <Box>
              <Typography fontSize={16} fontWeight={600} color= {theme.palette.text.primary}>Chest & Back</Typography>
              <Typography fontSize={14} fontWeight={500} color= {theme.palette.text.primary}>1:30 mins</Typography>
            </Box>
            <IconButton sx={{ backgroundColor: theme.palette.background.paper, padding: "12px", border: "2px solid #29E33C", marginLeft: "auto", color: "#29E33C" }}>
              <PlayArrowIcon />
            </IconButton>
          </Box>
          <Box display={"flex"} gap={1.5} alignItems={"center"} mb={1}>
            <Card sx={{ backgroundColor: theme.palette.background.default, padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "center" }}>
              <ImageIcon sx={{ width: "2rem", height: "2rem" }} />
            </Card>
            <Box>
              <Typography fontSize={16} fontWeight={600} color= {theme.palette.text.primary}>AB Workout</Typography>
              <Typography fontSize={14} fontWeight={500} color= {theme.palette.text.primary}>1:30 mins</Typography>
            </Box>
            <IconButton sx={{ backgroundColor: theme.palette.background.paper, padding: "12px", border: "2px solid #29E33C", marginLeft: "auto", color: "#29E33C" }}>
              <PlayArrowIcon />
            </IconButton>
          </Box>
        </Card>
      </Box>
    </PageWrapper>
  );
}
