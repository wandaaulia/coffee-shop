import React from "react";
import CoreCard from "./CoreCard";
import { Box, Skeleton, Typography } from "@mui/material";
import CoreImage from "../CoreImage";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useShoppingCart from "@/states/cart.state";
import StringUtil from "@/utils/string.util";

const LoadingCardCatalog = () => {
  return (
    <CoreCard style={{ margin: "10px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Skeleton
          variant="rectangular"
          width={130}
          height={100}
          className="skeleton-img-card"
        />

        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
        >
          <Skeleton
            variant="rectangular"
            width={80}
            height={10}
            className="skeleton-title-card"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5px",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rectangular"
              width={30}
              height={10}
              className="skeleton-price-card"
            />
            <Skeleton
              variant="rectangular"
              width={20}
              height={10}
              className="skeleton-cart-card"
            />
          </Box>
        </Box>
      </Box>
    </CoreCard>
  );
};

export default LoadingCardCatalog;
