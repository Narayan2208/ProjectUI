import { useEffect, useState } from "react";
import "./App.css";
import ContactUs from "./components/ContactUs";
import FeaturedProperties from "./components/FeaturedProperties";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MeetOurDesigner from "./components/MeetOurDesigner";
import TopRatedProperties from "./components/TopRatedProperties";
import { Box, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const checkScrollTop = () => {
    if (!showScrollButton && window.pageYOffset > 400) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.pageYOffset <= 400) {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScrollButton]);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5em" }}>
        <Home />
        <FeaturedProperties />
        <MeetOurDesigner />
        <TopRatedProperties />
        <ContactUs />
        <Footer />
        {/* Scroll to top button */}
        {showScrollButton && (
          <Button
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              background: "#006622",
              color: "white",
              // px: "0.5rem",
              // py: "1rem",
              borderRadius: "9999px",
              boxShadow:
                " 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                background: "#009933",
                color: "white",
              },
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: "2em" }} />
          </Button>
        )}
      </Box>
    </>
  );
}

export default App;
