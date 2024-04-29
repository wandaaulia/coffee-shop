import { Box, Skeleton } from "@mui/material";
import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ResponseData } from "@/models/coffee.model";
import SliderMenu from "./core/card/SliderMenu";

type Props = {
  resData: ResponseData[];
};

export default function CarouselCard({ resData }: Props) {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Swiper
        initialSlide={1}
        spaceBetween={15}
        slidesPerView={2.5}
        modules={[Pagination]}
        centeredSlides={true}
        loop={false}
      >
        {resData.length > 0 ? (
          resData.map((item: ResponseData) => (
            /* === CONTENT SLIDE === */
            <SwiperSlide
              key={item.id}
              style={{
                height: "100px",
                width: "100px",
              }}
            >
              <SliderMenu {...item} />
            </SwiperSlide>
            /* === END OF CONTENT SLIDE === */
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="rectangular"
              width="100px"
              height="100px"
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              width="140px"
              height="150px"
            ></Skeleton>
            <Skeleton
              variant="rectangular"
              width="100px"
              height="100px"
            ></Skeleton>
          </Box>
        )}

        <Box
          component={"div"}
          className="swiper-custom-pagination"
          style={{ textAlign: "center", marginTop: "10px" }}
        />
      </Swiper>
    </Box>
  );
}
