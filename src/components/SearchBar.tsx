import { SortRounded } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, Box } from "@mui/material";
import React from "react";

type Props = {};

function SearchBar({}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <TextField
        placeholder="Search"
        hiddenLabel
        autoFocus
        sx={{
          width: "300px",
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
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "8px",
        }}
      >
        <SortRounded sx={{ color: "black" }} />
      </Box>
    </Box>
  );
}

export default SearchBar;
