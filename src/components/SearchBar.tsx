import { SortRounded } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  type: string;
};

function SearchBar({ type = "button" }: Props) {
  if (type == "input") {
    return (
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <TextField
          placeholder="Search"
          hiddenLabel
          autoFocus
          sx={{
            width: "350px",
            backgroundColor: "#fff",
            borderRadius: "25px",
            padding: "0px 5px",
            border: "none",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          variant="standard"
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "350px",
          backgroundColor: "#fff",
          borderRadius: "25px",
          padding: "0px 5px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "32px",
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            color: "#757575",
            marginRight: "10px",
            textAlign: "center",
          }}
        >
          <SearchIcon sx={{ width: "24px", height: "24px" }} />
        </Box>

        <Typography sx={{ color: "#A2A2A2" }}> Search </Typography>
      </Box>
    </Box>
  );
}

export default SearchBar;
