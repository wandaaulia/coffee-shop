"use client";

import React, { useEffect, useState } from "react";
import LayoutMain from "../layout/LayoutMain";
import {
  Box,
  Card,
  CircularProgress,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "../styles/globals.css";
import AppBarMain from "../components/AppBarMain";
import "../styles/globals.css";
import { ResponseData } from "../models/coffee.model";
import Categories from "../components/core/Categories";
import CardCatalog from "../components/core/card/CardCatalog";
import useCategoriesState from "../states/categories.state";
import { PastaModel } from "../models/pasta.model";
import LoadingCardCatalog from "../components/core/card/LoadingCartCatalog";
import useShoppingCart from "../states/cart.state";
import CarouselCard from "@/components/CarouselCard";

type Props = {};

const Main = (props: Props) => {
  const [resData, setResData] = useState([]);
  const [resPasta, setResPasta] = useState([]);

  const [loading, setLoading] = useState(false);

  const { nameCategories } = useCategoriesState();

  const { loading: loadingState } = useShoppingCart();

  useEffect(() => {
    const fetchCoffee = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/allCoffee");
        const data = await response.json();
        setLoading(false);
        setResData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchPasta = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/allPasta");
        const data = await response.json();
        setLoading(false);
        setResPasta(data.data.meals.splice(0, 6));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoffee();
    fetchPasta();
  }, []);

  return (
    <LayoutMain>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBarMain />
        {loadingState && (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </Box>
        )}

        <CarouselCard resData={resData} />
        <Categories />
        <Box sx={{ marginTop: "20px", marginLeft: "20px" }}>
          <Typography> {nameCategories} </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "2px",
            padding: "0px 10px",
          }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <LoadingCardCatalog />
                </Box>
              ))
            : nameCategories == "Coffee"
            ? resData.length >= 1 &&
              resData.map((item: ResponseData, index) => (
                <CardCatalog
                  key={index}
                  name={item.name}
                  price={item.price}
                  image_url={item.image_url}
                  id={item.id.toString()}
                  maxHeightImage="170px"
                />
              ))
            : resPasta.length >= 1 &&
              resPasta.map((item: PastaModel, index) => (
                <CardCatalog
                  key={index}
                  name={item.strMeal}
                  price={12}
                  image_url={item.strMealThumb}
                  id={item.idMeal}
                />
              ))}
        </Box>
      </Box>
    </LayoutMain>
  );
};

export default Main;
