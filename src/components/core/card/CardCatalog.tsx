import React from "react";
import CoreCard from "./CoreCard";
import { Box, Typography } from "@mui/material";
import CoreImage from "../CoreImage";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

type Props = {
  name: string;
  price: number | undefined;
};

const CardCatalog = ({ ...props }: Props) => {
  function TruncatedText(a: string) {
    const truncatedText = a.length > 8 ? a.slice(0, 8) + "..." : a;

    return <span>{truncatedText}</span>;
  }

  return (
    <CoreCard>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CoreImage
          src="/img/blendCoffee.webp"
          width={120}
          height={100}
          backgroundColor="#1F3935"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
        >
          <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
            {TruncatedText(props.name)}
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
              sx={{ fontSize: "18px", cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
    </CoreCard>
  );
};

export default CardCatalog;
