"use client";

import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import useCategoriesState from "@/states/categories.state";

type ButtonProps = {
  name: string;
};

const Categories = () => {
  const { nameCategories, setCategories } = useCategoriesState();

  let res = ["Coffee", "Pasta"];

  const CategoriesBtn = styled(Button)<ButtonProps>((props) => ({
    width: "fit-content",
    maxWidth: "150px !important",
    padding: "5px 25px",
    borderRadius: "40px",
    cursor: "pointer",
    border: "1px solid #AFD6C9",
  }));

  return (
    <Box
      sx={{
        marginTop: "50px",
        marginLeft: "20px",
        width: "fit-content",
      }}
    >
      <Typography> Categories </Typography>

      <Box
        sx={{
          marginTop: "10px",
          width: "100%",
          maxWidth: "400px",
          gap: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {res.map((item, index) => (
          <CategoriesBtn
            name={item}
            key={index}
            style={{
              backgroundColor: item === nameCategories ? "#AFD6C9" : "fff",
            }}
            onClick={() => {
              setCategories(item);
            }}
            data-testid={`background-${item}`}
          >
            {item === "Coffee" ? (
              <FreeBreakfastOutlinedIcon
                style={{ color: "#0b6c51", fontSize: "20px" }}
              />
            ) : (
              <RamenDiningOutlinedIcon
                style={{
                  color: "#0b6c51",
                  fontSize: "20px",
                }}
              />
            )}

            <Typography
              sx={{
                marginLeft: "15px",
                fontWeight: "600px",
                color: "#0b6c51",
                fontSize: "12px",
              }}
            >
              {item}
            </Typography>
          </CategoriesBtn>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
