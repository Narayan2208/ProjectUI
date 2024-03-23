import React from "react";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import applestore from "../assets/applestoresvg.svg";
import playstore from "../assets/playstoresvg.svg";
const ContactUs = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            background: "#F2F1F1",
            width: { xs: "95%", md: "80%" },
            display: "flex",
            flexDirection: "column",
            gap: "1.5em",
            padding: { xs: "1.6em", md: "3em" },
            margin: "auto",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                textAlign: { xs: "center", md: "start" },
                fontSize: { xs: "22px", md: "30px" },
              }}
            >
              Download Trophy Nig. App
            </Typography>
            <Typography sx={{ textAlign: { xs: "center", md: "start" } }}>
              And never miss out any update
            </Typography>
          </Box>
          <Box
            sx={{
              color: "#5C5D5E",
              display: "flex",
              flexDirection: "column",
              gap: "0.8em",
            }}
          >
            <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
              ✅ Get to know about newly posted Properties as soon as they are
              posted
            </Typography>
            <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
              ✅ Manage your Properties with ease and instant alerts about
              Properties
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "1em" }}>
            <Box>
              <img src={playstore} alt="img" loading="lazy" />
            </Box>
            <Box>
              <img src={applestore} alt="img" loading="lazy" />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
