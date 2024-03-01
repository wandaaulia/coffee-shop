import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CoreCard from "./CoreCard";

type Props = {
  resData: resData[];
};

interface resData {
  arti: string;
  audio: string;
  deskripsi: string;
  jumlah_ayat: Number;
  nama: string;
  nama_latin: string;
  nomor: Number;
  tempat_turun: string;
}

function CardList({ ...props }: Props) {
  console.log("res ", props.resData);
  return (
    <>
      {props.resData.map((item, index) => (
        <CoreCard key={index} style={{ marginBottom: "15px" }}>
          <>
            <Box
              sx={{
                textAlign: "center",
                borderColor: "#1FA06E",
                borderWidth: "2px",
                borderStyle: "solid",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                color: "green",
              }}
            >
              {index + 1}
            </Box>
            <Box sx={{ marginLeft: "20px" }}>
              <Typography
                color="#356B5C"
                sx={{ fontWeight: "700", lineHeight: "30px" }}
                data-testid="nama-card-surah"
              >
                {item.nama_latin}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  color="#C6DAD4"
                  sx={{ fontSize: "12px" }}
                  data-testid="nama-tempat-surah"
                >
                  {item.tempat_turun},
                </Typography>
                <Typography
                  component="h2"
                  color="#C6DAD4"
                  sx={{ fontSize: "12px" }}
                  data-testid="jumlah-ayat-surah"
                >
                  {item.jumlah_ayat.toString()}
                </Typography>
              </Box>
            </Box>
          </>
        </CoreCard>
      ))}
    </>
  );
}

export default CardList;
