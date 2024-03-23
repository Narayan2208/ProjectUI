import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import FeaaturedPropertiesCard from "./FeaaturedPropertiesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css";
import HeadlineUI from "./HeadlineUI";
const FeaturedProperties = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dotsClass: "slick-dots",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000, // Change slide every 5 seconds (5000ms)
    beforeChange: (current, next) => setCurrentSlide(next),
    swipe: true, // Enable swiping
    swipeToSlide: true, // Swipe to slide directly
    arrows: false, // Remove arrows
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
const headings = {
  headline: "Featured Properties",
  paragraph: `Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh
              accumsan arcu erat donec massa pulvinar. Rutrum pharetra id risus
              interdum. Donec proin quis mauris neque`,
};
  return (
    <>
      <Container maxWidth={"xl"}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <HeadlineUI headings={headings} />

          <Box
            sx={{
              width: { xs: "90%", md: "80%" },
              margin: "auto",
              textAlign: "center",
            }}
            className="slider-container"
          >
            <Slider {...settings}>
              {[...Array(8)].map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: { xs: "0px 0.5em", md: "0px 1em" },
                  }}
                >
                  <FeaaturedPropertiesCard />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FeaturedProperties;
