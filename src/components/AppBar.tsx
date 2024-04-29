"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function AppBar({ onClick }: Props) {
  const mq = useMediaQuery("(min-width:500px)");

  return (
    <Box
      className="appbar"
      sx={{
        maxWidth: mq ? "400px" : "unset",
        width: "100%",
        height: "20px",
        marginTop: "20px",
        position: "relative",
      }}
    >
      <Box
        data-testid="back-btn-appbar"
        component="button"
        sx={{
          position: "absolute",
          left: 10,
          backgroundColor: "#fff",
          padding: "6px",
          display: "flex",
          alignItems: "center",
          border: "1px solid #dbdbdb",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <ArrowBackIosNewIcon
          style={{
            color: "#129466",
            margin: "auto",
            width: "16px",
            height: "16px",
          }}
        />
      </Box>
      <Typography sx={{ textAlign: "center", fontWeight: "700" }}>
        {" "}
        Cart List{" "}
      </Typography>
    </Box>
  );
}
