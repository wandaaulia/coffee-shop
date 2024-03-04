import React from "react";
import CoreCard from "./CoreCard";
import { Box, Typography } from "@mui/material";
import CoreImage from "../CoreImage";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useShoppingCart from "@/src/states/cart.state";
import StringUtil from "@/src/utils/string.util";

type Props = {
  name: string;
  price: number | undefined;
  image_url: string;
};

const CardCatalog = ({ ...props }: Props) => {
  const { addProduct, amount } = useShoppingCart();

  return (
    <CoreCard style={{ margin: "10px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CoreImage
          src={props.image_url}
          width={130}
          height={100}
          backgroundColor="#1F3935"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            {StringUtil.TruncatedText(props.name)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5px",
              alignItems: "center",
            }}
          >
            <Typography> ${props.price} </Typography>
            <ShoppingCartOutlinedIcon
              onClick={() => {
                addProduct({ name: props.name, price: props.price });
              }}
              sx={{ fontSize: "18px", cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
    </CoreCard>
  );
};

export default CardCatalog;
