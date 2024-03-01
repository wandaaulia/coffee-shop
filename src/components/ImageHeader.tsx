import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import "../styles/globals.css";

const ImageHeader = () => {
  return (
    <Box className="imgHome">
      <Image
        priority
        src="/img/alquran-transparent.png"
        alt="imgHome"
        width={120}
        height={120}
      />
    </Box>
  );
};

export default ImageHeader;
