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
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../styles/globals.css";
import SearchBar from "./SearchBar";
import useShoppingCart from "../states/cart.state";
import Image from "next/image";
import { useRouter } from "next/navigation";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#2B9677",
    color: "white",
    top: 2,
  },
}));

type AppBarMain = {
  style?: React.CSSProperties;
  home?: boolean;
  name?: string;
};

const AppBarMain = ({ style, home = true, name }: AppBarMain) => {
  const router = useRouter();

  const mq = useMediaQuery("(min-width:500px)");

  const { totalCart } = useShoppingCart();

  return (
    <>
      <Box
        sx={{
          maxWidth: mq ? "400px" : "unset",
          position: "relative",
          margin: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "transparent",
            border: "none",
            paddingTop: "20px",
            width: "100%",
            maxWidth: mq ? "400px" : "unset",
            zIndex: 999,
          }}
          style={{ ...style }}
          className="appBar-main"
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {home && (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ color: "#456D5F", fontWeight: "400" }}>
                  Good Morning
                </Typography>
                <Typography sx={{ color: "#456D5F", fontWeight: "700" }}>
                  Mila
                </Typography>
              </Box>
            )}

            {!home && (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  data-testid="home"
                  sx={{
                    margin: 0,
                    padding: 0,
                    color: "#456D5F",
                    fontWeight: "400",
                  }}
                  onClick={() => router.push("/")}
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Typography
                  sx={{
                    color: "#456D5F",
                    fontWeight: "700",
                    marginLeft: "10px",
                  }}
                >
                  {name}
                </Typography>
              </Box>
            )}

            <Box>
              <IconButton
                data-testid="cart"
                sx={{ margin: 0, padding: 0 }}
                onClick={() => router.push("/CartList")}
              >
                <StyledBadge badgeContent={totalCart()}>
                  <ShoppingBagOutlinedIcon color="action" />
                </StyledBadge>
              </IconButton>
            </Box>
          </Toolbar>
        </Box>

        <Box
          sx={{
            maxWidth: mq ? "400px" : "unset",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            margin: "auto",
          }}
        >
          <Image
            alt="imgBanner"
            src="/img/maskGreen.png"
            width={400}
            height={0}
            style={{ width: "100%", height: "200px" }}
            quality={100}
            priority={false}
          />
        </Box>
      </Box>
    </>
  );
};

export default AppBarMain;
