import { Box } from "@mui/material";
import Image from "next/image";
import React, { ReactElement } from "react";

type Props = {
  src: string;
  width: number | undefined;
  height: number | undefined;
  backgroundColor?: string;
};

const CoreImage = ({ src, width, height, backgroundColor }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor ?? "#fff",
        width: "120px",
        height: "120px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="card-image"
        style={{
          width,
          height,
        }}
        priority
      />
    </Box>
  );
};

export default CoreImage;
