"use client";

import React from "react";
import {
  AppBar,
  Badge,
  BadgeProps,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "../styles/globals.css";
import SearchBar from "./SearchBar";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#2B9677",
    color: "white",
    top: 2,
  },
}));

const AppBarMain = () => {
  const mq = useMediaQuery("(min-width:500px)");

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        border: "none",
        zIndex: "10000000",
        paddingTop: "30px",
        width: "100%",
        maxWidth: mq ? "400px" : "unset",
      }}
      className="appBar-main"
      elevation={0}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#456D5F", fontWeight: "400" }}>
            Good Morning
          </Typography>
          <Typography sx={{ color: "#456D5F", fontWeight: "700" }}>
            Mila
          </Typography>
        </Box>

        <Box>
          <IconButton aria-label="cart" sx={{ margin: 0, padding: 0 }}>
            <StyledBadge badgeContent={4}>
              <ShoppingBagOutlinedIcon color="action" />
            </StyledBadge>
          </IconButton>
          <IconButton aria-label="menu" sx={{ margin: 0, padding: 0 }}>
            <MenuIcon sx={{ marginLeft: "20px" }} />
          </IconButton>
        </Box>
      </Toolbar>

      <Box sx={{ margin: "10px auto" }}>
        <SearchBar />
      </Box>
    </AppBar>
  );
};

export default AppBarMain;
