"use client";

import AppBar from "@/components/AppBar";
import CoreImage from "@/components/core/CoreImage";
import LayoutMain from "@/layout/LayoutMain";
import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useShoppingCart from "@/states/cart.state";
import { useRouter } from "next/navigation";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ButtonOrder from "@/components/ButtonOrder";
import Swal from "sweetalert2";

type Props = {};

export default function CartList({}: Props) {
  const router = useRouter();

  const { removeFromCart, cart, addToCart, removeOneCart, loading } =
    useShoppingCart();

  return (
    <>
      <LayoutMain backgroundColor="#ffff">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "100px",
          }}
        >
          <AppBar onClick={() => router.push("/")} />

          {loading && (
            <Box
              className="loading"
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

          <Box sx={{ marginTop: "40px", width: "100%" }}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    backgroundColor: "#fff",
                    width: "90%",
                    minHeight: "140px",
                    marginRight: "20px",
                    marginLeft: "20px",
                    marginBottom: "20px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid #dbdbdb",
                    padding: "10px",
                    alignItems: "center",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  }}
                >
                  <Image
                    src={item.image}
                    width={120}
                    height={120}
                    alt="image"
                    style={{ borderRadius: "20px" }}
                  />

                  <Box
                    sx={{
                      color: "#000",
                      width: "100%",
                      marginLeft: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: "5px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "1.2rem",
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Box
                        component="button"
                        data-testid="remove-item-cart"
                        sx={{
                          padding: "5px",
                          cursor: "pointer",
                          border: "none",
                          backgroundColor: "#fff",
                          color: "black",
                        }}
                        onClick={() =>
                          Swal.fire({
                            title: "Delete this item ?",
                            showDenyButton: false,
                            showCancelButton: true,
                            confirmButtonText: "Delete",
                            width: 300,
                            customClass: "delete-popup",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              removeOneCart(item.id);
                              Swal.fire({
                                text: "Successfully remove from cart",
                                icon: "success",
                                showConfirmButton: false,
                                width: 300,
                                timer: 1500,
                                customClass: "add-popup",
                              });
                            }
                          })
                        }
                      >
                        <DeleteOutlinedIcon />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#129466", marginTop: "10px" }}>
                        ${item.price}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "row",
                          gap: "15px",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Box
                          data-testid="remove-one-cart"
                          sx={{
                            backgroundColor: "#AFD6C9",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            textAlign: "center",
                            padding: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => removeFromCart(item.id)}
                        >
                          <RemoveIcon style={{ fontSize: "18px" }} />
                        </Box>
                        <Typography data-testid="quantity-one-cart">
                          {item.quantity}
                        </Typography>
                        <Box
                          data-testid="add-one-cart"
                          sx={{
                            backgroundColor: "#AFD6C9",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            textAlign: "center",
                            padding: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          <AddIcon
                            style={{
                              fontSize: "18px",
                              margin: "auto",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))
            ) : (
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: "100px",
                }}
              >
                <Image
                  alt="empty cart"
                  src="/img/empty-cart.svg"
                  width="190"
                  height="160"
                  priority={false}
                />
                <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
                  Your Cart is empty
                </Typography>
                <Typography
                  sx={{
                    textWrap: "wrap",
                    width: "300px",
                    margin: "auto",
                    lineHeight: "19px",
                    marginTop: "10px",
                    color: "gray",
                  }}
                >
                  {" "}
                  Let&apos;s order some items and make your cart list heavy{" "}
                </Typography>
              </Box>
            )}
          </Box>

          {cart.length >= 1 && <ButtonOrder />}
        </Box>
      </LayoutMain>
    </>
  );
}
