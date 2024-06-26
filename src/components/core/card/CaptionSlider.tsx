import { Box, Typography } from "@mui/material";
import React from "react";
import StringUtil from "@/utils/string.util";

type Props = {
  name: string;
  price: number;
};

const CaptionSlider = (props: Props) => {
  return (
    <Box
      className="caption-slider"
      sx={{
        display: "none",
        flexDirection: "column",
        width: "120px",
        marginTop: "35px",
        cursor: "default",
      }}
    >
      <Typography
        sx={{
          color: "#A7DAC7",
          fontSize: "16px",
          lineHeight: "10px",
          textWrap: "nowrap",
        }}
      >
        <span> {StringUtil.TruncatedText(props.name)} </span>
      </Typography>
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
            fontSize: "10px",
            marginTop: "6px",
          }}
        >
          ${" "}
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "24px" }}>
          {props.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default CaptionSlider;
