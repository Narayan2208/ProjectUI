import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import bedimg from "../assets/spacejoy-nEtpvJjnPVo-unsplash.jpg";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
const FeaaturedPropertiesCard = () => {
  return (
    <>
      <Box
        sx={{
          width:  "100%",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          position: "relative",
          margin: { xs: "10px 10px", md: "10px 10px" },
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        {/* For sale box */}
        <Box
          sx={{
            background: "#10C66F",
            width: "7em",
            padding: "7px 2px",
            borderRadius: "2px",
            fontSize: "12px",
            textAlign: "center",
            fontWeight: "500",
            color: "white",
            position: "absolute",
            top: 14,
            left: 14,
          }}
        >
          <span>FOR SALE</span>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0em",
            position: "absolute",
            top: 14,
            right: 14,
          }}
        >
          <IconButton sx={{ color: "#10C66F" }}>
            <NoteAddIcon />
          </IconButton>
          <IconButton sx={{ color: "#10C66F" }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton sx={{ color: "#10C66F" }}>
            <ZoomOutMapIcon />
          </IconButton>
        </Box>

        <Box>
          <img
            style={{
              objectFit: "cover",
              aspectRatio: 3.5 / 3,
            }}
            src={bedimg}
            alt="image"
            loading="lazy"
            width={"100%"}
          />
        </Box>
        <Box
          sx={{
            p: "1em 1.5em",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            textAlign: "start",
            // fontWeight: "500",
          }}
        >
          <p>Min flat in lekki phase</p>
          <p style={{ fontWeight: "600", color: "#17C873" }}>
            N 2,500,000/sq ft
          </p>
          <p style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "600" }}>3</span> Bed{" "}
            <span style={{ fontWeight: "600" }}>2</span> bath
          </p>
          <p style={{ fontSize: "12px", fontWeight: "500" }}>
            Managed by JR developers
          </p>
        </Box>
      </Box>
    </>
  );
};

export default FeaaturedPropertiesCard;
