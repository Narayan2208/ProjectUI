import "./App.css";
import ContactUs from "./components/ContactUs";
import FeaturedProperties from "./components/FeaturedProperties";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MeetOurDesigner from "./components/MeetOurDesigner";
import TopRatedProperties from "./components/TopRatedProperties";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
function App() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5em" }}>
        <Home/>
        <FeaturedProperties />
        <MeetOurDesigner />
        <TopRatedProperties />
        <ContactUs />
        <Footer />
      </Box>
    </>
  );
}

export default App;
