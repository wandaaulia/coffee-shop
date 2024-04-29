import { Box } from "@mui/material";
import Image from "next/image";
import React, { ReactElement } from "react";

type Props = {
  src: string;
  width?: number | undefined;
  height?: number | undefined;
  backgroundColor?: string;
  maxHeightImage?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const CoreImage = ({
  src,
  width = 190,
  height = 140,
  backgroundColor,
  style,
  onClick,
  ...props
}: Props) => {
  return (
    <Box
      {...props}
      component={onClick ? "button" : "div"}
      className="wrap-image"
      sx={{
        backgroundColor: backgroundColor ?? "#fff",
        width: "190px",
        height: "140px",
        display: "flex",
        alignItems: "center",
        maxHeight: "140px",
        margin: "auto",
      }}
      style={{ justifyContent: "space-between" }}
      onClick={onClick}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="card-image"
        style={{
          width,
          objectFit: "cover",
          ...style,
        }}
        priority
      />
    </Box>
  );
};

export default CoreImage;
