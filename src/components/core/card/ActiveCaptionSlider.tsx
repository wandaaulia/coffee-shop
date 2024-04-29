import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  region: string;
  price: number;
  weight: number;
};

const ActiveCaptionSlider = (props: Props) => {
  return (
    <Box
      className="active-caption-slider"
      sx={{
        position: "absolute",
        bottom: 0,
        top: "15px",
        display: "none",
        flexDirection: "column",
        width: "140px",
        padding: "10px",
        cursor: "default",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "16px",
          lineHeight: "18px",
        }}
      >
        {props.name}
      </Typography>
      <Typography
        sx={{
          color: "#A7DAC7",
          fontSize: "12px",
          lineHeight: "20px",
        }}
      >
        {props.region}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "12px",
              marginTop: "8px",
            }}
          >
            $
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
            {props.price}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "12px",
              lineHeight: "10px",
            }}
          >
            {props.weight}gr
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "8px",
            }}
          >
            weight
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveCaptionSlider;
