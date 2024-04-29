"use client";

import AppBarMain from "@/components/AppBarMain";
import CoreImage from "@/components/core/CoreImage";
import LayoutMain from "@/layout/LayoutMain";
import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScaleIcon from "@mui/icons-material/Scale";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonOverlay from "@/components/ButtonOverlay";

type TypePasta = {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strMealThumb: string;
  price: number;
};

type ResponseType = {
  description: string;
  id: number;
  image_url: string;
  name: string;
  price: number;
  region: string;
  weight: number;
};

export default function Detail({
  params,
}: {
  params: { id: string; type: string };
}) {
  const [resData, setResData] = useState<ResponseType | undefined>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoffee = async () => {
      console.log("Data param 1 :  ", params.id);
      setLoading(true);

      if (params !== undefined) {
        try {
          if (params.type == "Coffee") {
            const response = await fetch(`/api/singleCoffee/${params.id}`);
            const data = await response.json();
            console.log("Data ", data.data[0]);
            setLoading(false);
            setResData(data.data[0]);
            return;
          }

          if (params.type == "Pasta") {
            const response = await fetch(`/api/singlePasta/${params.id}`);
            const data = await response.json();
            const pasta = {
              id: Number(data.data.meals[0].idMeal),
              name: data.data.meals[0].strMeal,
              region: data.data.meals[0].strArea,
              image_url: data.data.meals[0].strMealThumb,
              price: 12,
              weight: 0,
              description: "",
            };
            setLoading(false);
            console.log("Data pastaa ", data);
            setResData(pasta);
            return;
          }

          setLoading(false);
          setResData(undefined);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchCoffee();
  }, [params]);

  return (
    <LayoutMain>
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppBarMain home={false} name="Product Detail" />

          <Box
            sx={{
              width: "100%",
              margin: "12px auto auto auto",
            }}
          >
            {resData ? (
              <>
                <CoreImage
                  width={180}
                  height={resData.price > 12 ? 220 : 180}
                  src={resData.image_url}
                  style={{
                    zIndex: 1,
                    margin: "auto",
                    borderRadius: resData.price > 12 ? "none" : "50%",
                  }}
                />

                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#129466 ",
                    borderRadius: "50%",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "15px",
                    marginTop: "18px",
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: "20px" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "20px 20px 0px 20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "#515151",
                      fontWeight: "500",
                    }}
                  >
                    {resData.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "26px",
                      color: "#129466",
                      fontWeight: "700",
                    }}
                  >
                    ${resData.price}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#129466",
                    margin: "10px 16px",
                    padding: "20px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ScaleIcon style={{ color: "#fff" }} />
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "400",
                      marginLeft: "20px",
                    }}
                  >
                    {resData.price > 12 ? resData.weight : "150"} gram
                  </Typography>
                </Box>

                <Box
                  sx={{
                    margin: "8px 16px",
                    paddingTop: "10px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontWeight: "500", color: "#000" }}>
                    {" "}
                    Region{" "}
                  </Typography>
                  <Box
                    sx={{
                      borderRadius: "10px",
                      width: "200px",
                      padding: "6px 0",
                      textAlign: "center",
                      border: "1px solid #129466",
                    }}
                  >
                    <Typography sx={{ fontWeight: "500", color: "#000" }}>
                      {resData.region}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #129466",
                    margin: "20px 16px 18px 16px",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    height: "fit-content",
                  }}
                >
                  <>
                    <Typography sx={{ fontWeight: "500", color: "#000" }}>
                      Description
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        marginTop: "5px",
                        color: "#000",
                      }}
                    >
                      {resData.description !== ""
                        ? resData.description
                        : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus enim ut mi sagittis dapibus. Aliquam ornare scelerisque velit et malesuada. Sed quis fermentum nulla. Aenean nec ultrices nulla.  `}
                    </Typography>
                  </>
                </Box>
              </>
            ) : (
              <>
                <Skeleton
                  variant="rectangular"
                  width="180px"
                  height="180px"
                  sx={{ margin: "auto" }}
                ></Skeleton>
                <Skeleton
                  variant="rounded"
                  width="320px"
                  height="20px"
                  sx={{ marginTop: "40px", marginX: "auto" }}
                ></Skeleton>
                <Skeleton
                  variant="rounded"
                  width="320px"
                  height="20px"
                  sx={{ marginTop: "20px", marginX: "auto" }}
                ></Skeleton>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "320px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <Skeleton
                    variant="rounded"
                    height="20px"
                    sx={{ marginTop: "20px", marginX: "auto", width: "20%" }}
                  ></Skeleton>
                  <Box sx={{ width: "20%" }}></Box>
                  <Skeleton
                    variant="rounded"
                    height="20px"
                    sx={{ marginTop: "20px", marginX: "auto", width: "60%" }}
                  ></Skeleton>
                </Box>
                <Skeleton
                  variant="rounded"
                  height={150}
                  width={320}
                  sx={{ marginTop: "20px", marginX: "auto" }}
                ></Skeleton>
              </>
            )}
          </Box>
        </Box>

        {resData && (
          <ButtonOverlay
            product={{
              id: resData.id,
              name: resData.name,
              price: resData.price,
              image: resData.image_url,
              quantity: 1,
            }}
          />
        )}
      </>
    </LayoutMain>
  );
}
