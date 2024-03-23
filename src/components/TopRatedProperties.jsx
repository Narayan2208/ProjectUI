import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import HeadlineUI from "./HeadlineUI";
import bedimg from "../assets/spacejoy-nEtpvJjnPVo-unsplash.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const TopRatedProperties = () => {
  const headings = {
    headline: "Top Rated Properties",
    paragraph: `Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan
        arcu erat donec massa pulvinar. Rutrum pharetra id risus interdum. Donec
        proin quis mauris neque`,
  };
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
          }}
        >
          <HeadlineUI headings={headings} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "1em", md: "2em" },
              width: { xs: "95%", md: "95%", lg: "90%" },
              margin: "auto",
              textAlign: "center",
            }}

          >
            {[...Array(3)].map((_, index) => (
              <Box key={index} width={"100%"}>
                <Cards />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TopRatedProperties;
const Cards = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          position: "relative",
          //   margin: { xs: "10px 10px", md: "10px 10px" },
          borderRadius: "5px",
          overflow: "hidden",
          display: "flex",
          background: "#EFEFEF",
        }}
        data-aos="flip-left" 
      >
        <Box sx={{ width: "10em" }}>
          <img
            style={{
              objectFit: "cover",
              aspectRatio: 3.5 / 3,
            }}
            src={bedimg}
            alt="image"
            loading="lazy"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            p: "1em 1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "start",
            gap: "10em",
            // fontWeight: "500",
          }}
        >
          <Box>
            {" "}
            <p style={{ fontWeight: "600", fontSize: "20px" }}>
              Mapkson Gardenia
            </p>
            <p>Mapkson Builders</p>
            <p style={{ fontWeight: "600", color: "#17C873" }}>
              Greater Kailash, Delhi
            </p>
            <p style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: "600" }}>3</span> Bed{" "}
              <span style={{ fontWeight: "600" }}>2</span> bath
            </p>
          </Box>

          <Box>
            <p
              style={{ fontSize: "12px", fontWeight: "500", color: "#5C5D5E" }}
            >
              Managed by JR developers
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};
