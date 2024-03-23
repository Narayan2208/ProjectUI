import React from "react";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import logo from "../assets/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
const Footer = () => {
  return (
    <Container maxWidth={"xl"} sx={{ background: "#10C66F" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "3em", md: "20em" },
          color: "white",
          padding: { xs: "2em 0em", md: "3em" },
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
          <Box sx={{ width: "8em",margin:"auto" }}>
            <img src={logo} alt="image" width={"100%"} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography>Follow us on:</Typography>
            <Box
              sx={{
                display: "flex",

                gap: "10px",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <IconButton sx={{ color: "#fff", fontSize: "22px", padding: 0 }}>
                <CiFacebook />
              </IconButton>
              <IconButton sx={{ color: "#fff", fontSize: "20px", padding: 0 }}>
                <FaInstagram />
              </IconButton>
              <IconButton sx={{ color: "#fff", fontSize: "20px", padding: 0 }}>
                <WhatsAppIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                gap: "8px",
                fontSize: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                <BiLogoGmail />
                <span>xyz@gmail.com</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                <MdOutlinePhoneInTalk />
                <span>8617358094</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                <GrMapLocation />
                <span>Noida</span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            textAlign: { xs: "center", md: "start" },
            // border: "2px solid red",
          }}
        >
          <Typography sx={{ fontSize: "25px" }}>Company</Typography>
          <Typography>About us</Typography>
          <Typography>Contact us</Typography>
          <Typography>Pricing</Typography>
          <Typography>Term & Condition</Typography>
          <Typography>Report & Problem</Typography>
          <Typography>Privacy & Policy</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8em",
            // border: "2px solid red",
            width: { xs: "80%", sm:"50%", md: "20%" },
          }}
        >
          <p style={{ fontSize: "18px" }}>Stay upto date</p>
          <input
            placeholder="Enter your email address"
            style={{
              padding: "0.7em 1em",
              outline: "none",
              border: "none",
              backgroundColor: "#D9D9D9",
            }}
          />
          <Button
            sx={{
              background: "white",
              textTransform: "none",
              "&:hover": { background: "white" },
              fontWeight: "600",
              py: "0.8em",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              width: "85%",
            }}
          >
            Subscribe for{" "}
            <span style={{ color: "#10C66F", paddingLeft: "3px" }}>
              {" "}
              {" newsletter >>"}
            </span>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
