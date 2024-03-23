import React from 'react'
import { Box, Typography, Grid, Container } from "@mui/material";
const HeadlineUI = ({ headings }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: { xs: "95%", md: "60%" },
        m: "auto",
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          color: "#10C66F",
          fontSize: { xs: "25px", md: "40px" },
        }}
      >
        {headings.headline}
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "13px", md: "18px" }, color: "#584F72" }}
      >
        {headings.paragraph}
      </Typography>
    </Box>
  );
};

export default HeadlineUI