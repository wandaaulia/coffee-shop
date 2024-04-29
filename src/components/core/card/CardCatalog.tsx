import React from "react";
import CoreCard from "./CoreCard";
import { Box, Typography } from "@mui/material";
import CoreImage from "../CoreImage";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useShoppingCart from "@/states/cart.state";
import StringUtil from "@/utils/string.util";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  maxHeightImage?: string;
};

const CardCatalog = ({ ...props }: Props) => {
  const { setLoading } = useShoppingCart();

  const btnAddToCart = useShoppingCart((state) => state.addToCart);

  const router = useRouter();

  let product = {
    id: props.id,
    name: props.name,
    price: props.price,
    image: props.image_url,
    quantity: 1,
  };
  return (
    <CoreCard
      style={{
        padding: 0,
        width: "48%",
        margin: "10px auto",
        minWidth: "48%",
        maxWidth: "48%",
        borderRadius: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
        }}
      >
        <CoreImage
          data-testid="card-catalog-image"
          src={props.image_url}
          style={{ width: "100%", cursor: "pointer" }}
          backgroundColor={props.price == 12 ? "transparent" : "#1F3935"}
          onClick={() =>
            router.push(
              `/Detail/${props.price == 12 ? "Pasta" : "Coffee"}/${props.id}`
            )
          }
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0 10px 15px",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            {StringUtil.TruncatedText(props.name)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "5px 10px 0px 0px",
              alignItems: "center",
            }}
          >
            <Typography> ${props.price} </Typography>
            <ShoppingCartOutlinedIcon
              data-testid="add-cart-button"
              sx={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => {
                setLoading();
                setTimeout(() => {
                  setLoading();
                }, 500);
                setTimeout(() => {
                  btnAddToCart(product);
                  Swal.fire({
                    text: "Successfully added to cart",
                    icon: "success",
                    showConfirmButton: false,
                    width: 300,
                    timer: 1500,
                    customClass: "add-popup",
                  });
                }, 1000);
              }}
            />
          </Box>
        </Box>
      </Box>
    </CoreCard>
  );
};

export default CardCatalog;
