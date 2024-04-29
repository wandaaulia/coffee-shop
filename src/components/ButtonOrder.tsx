import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import useShoppingCart from "../states/cart.state";
import { useRouter } from "next/navigation";

type Props = {};

export default function ButtonOrder({}: Props) {
  const mq = useMediaQuery("(min-width:500px)");

  const { setLoading, clearCart, totalPrice } = useShoppingCart();

  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: mq ? "400px" : "unset",
        backgroundColor: "#fff",
        position: "fixed",
        bottom: 0,
        padding: "15px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          paddingLeft: "15px",
        }}
      >
        <Typography sx={{ color: "gray" }}> amount </Typography>
        <Typography
          sx={{ fontWeight: "500", fontSize: "18px", color: "black" }}
        >
          ${totalPrice().toFixed(2)}
        </Typography>
      </Box>
      <Button
        data-testid="btn-order"
        sx={{
          width: "70%",
          marginRight: "20px",
          padding: "15px",
          backgroundColor: "#129466",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => {
          setLoading();

          setTimeout(() => {
            setLoading();
            router.push("/");
          }, 1000);

          setTimeout(() => {
            clearCart();
          }, 1100);
        }}
      >
        Buy Now
      </Button>
    </Box>
  );
}
