import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import useShoppingCart, { CartItem } from "../states/cart.state";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type Props = {
  product: {};
};

export default function ButtonOverlay({ product }: Props) {
  const { addToCart } = useShoppingCart();

  const mq = useMediaQuery("(min-width: 500px)");

  const router = useRouter();

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        padding: "10px 16px",
        gap: "10px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(149, 157, 165, 0.2)",
        maxWidth: mq ? "400px" : "unset",
      }}
    >
      <Box
        component="button"
        sx={{
          backgroundColor: "#B0D6C9",
          border: "none",
          color: "#fff",
          padding: "10px 20px",
          width: "50%",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => {
          addToCart(product as CartItem);
          Swal.fire({
            text: "Successfully added to cart",
            icon: "success",
            showConfirmButton: false,
            width: 300,
            timer: 1500,
            customClass: "add-popup",
          });
        }}
      >
        <Typography sx={{ fontWeight: "500" }}>Add to Cart</Typography>
      </Box>

      <Box
        component="button"
        sx={{
          backgroundColor: "#129466",
          border: "none",
          color: "#fff",
          padding: "10px 20px",
          width: "50%",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => {
          addToCart(product as CartItem);
          Swal.fire({
            text: "Successfully added to cart",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            width: 300,
            customClass: "add-popup",
          });
          setTimeout(() => {
            router.push("/CartList");
          }, 1500);
        }}
      >
        <Typography sx={{ fontWeight: "500" }}>Order Now</Typography>
      </Box>
    </Box>
  );
}
