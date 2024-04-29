import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import ActiveCaptionSlider from "./ActiveCaptionSlider";
import CaptionSlider from "./CaptionSlider";
import { ResponseData } from "@/models/coffee.model";
import "@/styles/globals.css";

const SliderMenu = (item: ResponseData) => {
  return (
    <Box className="container-image-slider">
      <Image
        src={item.image_url}
        width="100"
        height="100"
        priority
        alt="img"
        className="imgSlide"
      />

      <ActiveCaptionSlider
        name={item.name}
        region={item.region}
        price={item.price}
        weight={item.weight}
      />

      <CaptionSlider name={item.name} price={item.price} />
    </Box>
  );
};

export default SliderMenu;
