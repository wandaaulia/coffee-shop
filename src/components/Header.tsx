import React from "react";
import ImageHeader from "./ImageHeader";
import { Box, Card, CardContent, Typography } from "@mui/material";
import BookmarkBorderSharpIcon from "@mui/icons-material/BookmarkBorderSharp";

const Header = () => {
  return (
    <>
      <ImageHeader />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <BookmarkBorderSharpIcon />
          <Typography sx={{ fontSize: "12px" }}> Last Read </Typography>
        </Box>

        <Box sx={{ marginTop: "40px" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
            Al-Faatiha
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "300",
              marginTop: "10px",
            }}
          >
            Ayah No.3
          </Typography>
        </Box>
      </CardContent>
    </>
  );
};

export default Header;
