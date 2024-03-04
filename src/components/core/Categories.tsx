import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import useCategoriesState from "@/src/states/categories.state";

type Props = {};

const Categories = (props: Props) => {
  const { nameCategories, setCategories } = useCategoriesState();

  let res = ["Coffee", "Pasta"];

  return (
    <Box sx={{ marginTop: "50px", marginLeft: "20px" }}>
      <Typography> Categories </Typography>

      <Box sx={{ marginTop: "10px" }}>
        <Swiper
          initialSlide={0}
          spaceBetween={10}
          centeredSlides={false}
          loop={false}
        >
          {res.map((item: string, index) => (
            /* === CONTENT SLIDE === */
            <SwiperSlide
              key={index}
              style={{
                width: "fit-content !important",
                maxWidth: "150px !important",
                backgroundColor: nameCategories == item ? "#AFD6C9" : "#fff",
                padding: "5px 25px",
                borderRadius: "40px",
              }}
              onClick={() => setCategories(item)}
            >
              {item == "Coffee" ? (
                <FreeBreakfastOutlinedIcon />
              ) : (
                <RamenDiningOutlinedIcon />
              )}

              <Typography sx={{ marginLeft: "15px", fontWeight: "600px" }}>
                {" "}
                {item}{" "}
              </Typography>
            </SwiperSlide>
            /* === END OF CONTENT SLIDE === */
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Categories;
