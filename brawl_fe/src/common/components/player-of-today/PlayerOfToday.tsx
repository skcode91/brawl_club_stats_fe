"use client";

import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";

interface PlayerOfTheDayProps {
  result: number;
  clubName: string;
  name: string;
  trophies: number;
}

const topPlayerOfTheDay: PlayerOfTheDayProps = {
  result: 540,
  clubName: "LTX Team",
  name: "Alex",
  trophies: 122500,
};

const PlayerOfToday = () => {
  const today = new Date().toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card
      sx={{
        maxWidth: 440,
        minHeight: 300,
        minWidth: 300,
        borderRadius: "18px",
        background: "linear-gradient(to bottom right, #22c55e, #16a34a)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
        border: "4px solid #000",
        overflow: "hidden",
        color: "#fff",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          backgroundColor: "red",
          px: 3,
          py: 1.5,
          borderBottom: "3px solid #000",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "#fff700", mr: 1 }} />
          <Typography variant="h6" fontWeight="bold" sx={{ letterSpacing: 1 }}>
            Dzisiaj prowadzi
          </Typography>
        </Box>
      </Box>

      {/* Zawartość */}
      <CardContent
        sx={{
          backgroundColor: "#f1f5f9",
          textAlign: "center",
          px: 4,
          py: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mb: 1,
            color: "#0f172a",
          }}
        >
          {topPlayerOfTheDay.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#334155",
            fontWeight: 500,
            mb: 1,
          }}
        >
          Klub: {topPlayerOfTheDay.clubName}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="medium"
          sx={{ color: "#1f2937", mb: 2 }}
        >
          Puchary:{" "}
          <span style={{ fontWeight: 700 }}>{topPlayerOfTheDay.trophies}</span>
        </Typography>

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#10b981",
            px: 2.5,
            py: 1,
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.2)",
            fontSize: "1rem",
          }}
        >
          <EmojiEventsIcon sx={{ color: "#facc15" }} />+
          {topPlayerOfTheDay.result} pucharów
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlayerOfToday;
