"use client";

import React, { useEffect, useState } from "react";
import LayoutMain from "../layout/LayoutMain";
import { Box, Card, Skeleton, Typography, useMediaQuery } from "@mui/material";
import "../styles/globals.css";
import Header from "../components/Header";
import CardList from "../components/core/card/CardList";
import Image from "next/image";
import AppBarMain from "../components/AppBarMain";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../styles/globals.css";
import { ResponseData } from "../models/coffee.model";
import ActiveCaptionSlider from "../components/core/card/ActiveCaptionSlider";
import CaptionSlider from "../components/core/card/CaptionSlider";
import SliderMenu from "../components/core/card/SliderMenu";
import Categories from "../components/core/Categories";
import CoreCard from "../components/core/card/CoreCard";
import CoreImage from "../components/core/CoreImage";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardCatalog from "../components/core/card/CardCatalog";

type Props = {};

const Main = (props: Props) => {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);

  const mq = useMediaQuery("(min-width:500px)");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/allCoffee");
        const data = await response.json();
        console.log("Data ", data.data);
        setLoading(false);
        setResData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function TruncatedText(a: string) {
    const truncatedText = a.length > 8 ? a.slice(0, 14) + "..." : a;

    return <span>{truncatedText}</span>;
  }

  return (
    <div>
      <LayoutMain>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            width: "100%",
            maxWidth: mq ? "400px" : "unset",
            backgroundColor: "#f2f2f2",
          }}
        >
          <AppBarMain />

          <Box
            sx={{
              width: "100%",
              height: "261px",
              maxWidth: mq ? "400px" : "unset",
              position: "absolute",
              top: "0",
            }}
          >
            <Image
              priority
              fill
              src="/img/maskGreen.png"
              alt="imgHeader"
              style={{
                maxWidth: "400px",
                maxHeight: "261px",
                right: "auto !important",
                left: "auto !important",
                position: "absolute",
                top: "0",
              }}
            />
          </Box>
          <Box sx={{ marginTop: "250px" }}>
            <Swiper
              initialSlide={1}
              spaceBetween={15}
              slidesPerView={2.5}
              modules={[Pagination]}
              centeredSlides={true}
              loop={false}
            >
              {resData.map((item: ResponseData) => (
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
              ))}

              <Box
                component={"div"}
                className="swiper-custom-pagination"
                style={{ textAlign: "center", marginTop: "10px" }}
              />
            </Swiper>
          </Box>

          <Categories />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              margin: "30px 20px 0 auto",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {resData.map((item: ResponseData, index) => (
              <CardCatalog key={index} {...item} />
            ))}
          </Box>
        </Box>
      </LayoutMain>
    </div>
  );
};

export default Main;
