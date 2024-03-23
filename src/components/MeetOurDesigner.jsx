import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import img from "../assets/proffetionalimg.jpg";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import HeadlineUI from "./HeadlineUI";
import AOS from "aos";
import "aos/dist/aos.css";
const MeetOurDesigner = () => {
  const headings = {
    headline: "Meet our Designer",
    paragraph: `Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan
        arcu erat donec massa pulvinar. Rutrum pharetra id risus interdum. Donec
        proin quis mauris neque`,
  };
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3em" }}>
          <HeadlineUI headings={headings} />

          <Grid
            container
            spacing={3}
            sx={{
              margin: "auto",
              display: "flex",
              width: "80%",
            }}
          >
            {[...Array(4)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Cards />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default MeetOurDesigner;

const Cards = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          gap: "0.5em",
          textAlign: "center",
          width: "100%",
          pt: "1em",
          pb: "1em",
          borderRadius: "10px",
          position: "relative",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          boxShadow: isHovered
            ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            : "none",
          backgroundColor: isHovered ? "#fff" : "#fff", // Change color to white
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
       
      >
        <Box
          sx={{
            width: { xs: "8em", md: "12em" },
            overflow: "hidden",
            borderRadius: "100px",
            margin: "auto",
          }}
        >
          <img
            src={img}
            alt="professional img"
            loading="lazy"
            width={"100%"}
            height={"100%"}
            style={{ aspectRatio: 2 / 2, objectFit: "cover" }}
          />
        </Box>
        <Box>
          <Typography
            sx={{ fontWeight: "600", color: "#2F234F", fontSize: "20px" }}
          >
            Narayan Dutta
          </Typography>
          <p style={{ color: "#9791A7" }}>Designer</p>
        </Box>
        {isHovered && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "0em",
            }}
          >
            <IconButton
              sx={{ "&:hover": { color: "#10C66F" }, fontSize: "20px" }}
            >
              <FiFacebook />
            </IconButton>
            <IconButton
              sx={{ "&:hover": { color: "#10C66F" }, fontSize: "20px" }}
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              sx={{ "&:hover": { color: "#10C66F" }, fontSize: "20px" }}
            >
              <FiLinkedin />
            </IconButton>
            <IconButton
              sx={{ "&:hover": { color: "#10C66F" }, fontSize: "20px" }}
            >
              <RiTwitterLine />
            </IconButton>
          </Box>
        )}
      </Box>
    </>
  );
};
