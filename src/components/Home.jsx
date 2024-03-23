import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Stack,
  Drawer,
  Divider,
  Link,
} from "@mui/material";
import logo from "../assets/logo.png";
import { FaRegCircleUser } from "react-icons/fa6";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  //   const navigator = useNavigate("");
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState((p) => !p);
  };
  const NavContent1 = [
    {
      title: "Home",
    },
    {
      title: "Properties",
    },
    {
      title: "Designs",
    },
    {
      title: "About us",
    },
    {
      title: "Contact us",
    },
  ];
 useEffect(() => {
   AOS.init();
 }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/home.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Container maxWidth={"xl"} sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "5em", pt: "1em" }}>
              <img src={logo} width={"100%"} />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "2em",
                fontWeight: "700",
                alignItems: "center",
                color: "#10C66F",
              }}
            >
              <Typography>Home</Typography>
              <Typography>Properties</Typography>
              <Typography>Designs</Typography>
              <Typography>Search</Typography>
              <Typography>About us</Typography>
              <Typography>Contact us</Typography>
              <IconButton sx={{ color: "black" }}>
                <FaRegCircleUser />
              </IconButton>
              <Box>
                <Button
                  sx={{
                    textTransform: "none",
                    background: "#10C66F",
                    color: "white",
                    px: "1em",
                  }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Create listing
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.8em",
              width: { xs: "90%", sm: "80%", md: "50%" },
              color: "white",
              position: "relative",
              top: { xs: "4em", sm: "7em", md: "10em" },
              pl: { xs: "1em", sm: "2em", md: "2em" },
            }}
            data-aos="fade-right"
          >
            <Typography>We are offering the </Typography>
            <Typography
              sx={{
                fontSize: { xs: "40px", sm: "45px", md: "50px" },
                fontWeight: "700",
              }}
            >
              Best Real Estate Deals
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "15px", md: "18px" } }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Box>
              <Button
                sx={{
                  textTransform: "none",
                  background: "#10C66F",
                  color: "white",
                  px: "1em",
                }}
              >
                More Details
              </Button>
            </Box>
          </Box>

          {/* Hamburger menu of responsive layout */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MenuIcon
              fontSize="large"
              onClick={toggleDrawer}
              sx={{
                position: "absolute",
                top: 15,
                right: 20,
                color: "white",
              }}
            />
            <Drawer
              anchor={"right"}
              open={state}
              variant="temporary"
              onClose={() => toggleDrawer(true)}
            >
              <Box
                sx={{
                  margin: "15px auto",
                  display: "flex",
                  alignItems: "center",
                  //   backgroundColor: "#10C66F",
                }}
              >
                <img src={logo} width={"60px"} />
              </Box>
              <Divider />
              {NavContent1.map((item, index) => (
                <Box
                  sx={{
                    padding: "0px 2rem 0px 2rem",
                  }}
                  key={index}
                >
                  <Button
                    sx={{
                      margin: "2rem 0rem 0rem 0rem",
                      padding: "10px 4rem",
                      variant: "outlined",
                      //   background: background,
                      width: "100%",
                      border: "1px solid #10C66F",
                      borderRadius: "7px",
                      transition: "background-color 0.3s ease", // Add transition for smooth color change
                      "&:hover": {
                        backgroundColor: "#10C66F",
                      },
                    }}
                  >
                    <Typography
                      key={index}
                      variant="body4"
                      color="#10C66F"
                      sx={{
                        fontWeight: "500",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Button>
                </Box>
              ))}
            </Drawer>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Home;
