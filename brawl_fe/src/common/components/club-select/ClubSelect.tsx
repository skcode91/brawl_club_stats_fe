"use client";
import { useClubContext } from "@/common/contexts/club-context/ClubContext";
import useGetAllClubsQuery from "@/services/api/club/useGetAllClubsQuery";
import {
  Select,
  MenuItem,
  CircularProgress,
  FormControl,
  InputLabel,
  Box,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const ClubSelect = () => {
  const { data: clubs, isLoading } = useGetAllClubsQuery();
  const { activeTag, setActiveTag } = useClubContext();

  const handleSelectChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setActiveTag(newValue === "" ? undefined : newValue);
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: "1.5rem" }}>
      <Select
        value={activeTag ?? ""}
        onChange={handleSelectChange}
        displayEmpty
        sx={{
          fontWeight: "bold",
          textShadow: "1px 1px #000",
          borderRadius: "12px",
          padding: "0.75rem 1rem",
        }}
      >
        <MenuItem value="">
          {isLoading ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CircularProgress size={18} sx={{ marginRight: "0.5rem" }} />
              Loading...
            </Box>
          ) : (
            "WSZYSTKIE KLUBY"
          )}
        </MenuItem>

        {!isLoading &&
          clubs?.map((club) => (
            <MenuItem key={club.tag} value={club.tag}>
              {club.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default ClubSelect;
