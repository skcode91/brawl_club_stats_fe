"use client";

import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import useClubGetPlayerOfDayQuery from "@/services/api/club/useGetPlayerOfDayQuery";
import useIsMobileResolution from "@/hooks/useIsMobileResolution";

const PlayerOfToday = () => {
  const isMobile = useIsMobileResolution();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formattedToday = today.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { data: player, isLoading } = useClubGetPlayerOfDayQuery({
    params: {
      Date: today,
    },
  });

  if (!player || isLoading) {
    return (
      <Card
        sx={{
          minWidth: isMobile ? "100%" : 300,
          width: isMobile ? "100%" : 440,
          borderRadius: "18px",
          background: "linear-gradient(to bottom right, #22c55e, #16a34a)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
          border: "4px solid #000",
          overflow: "hidden",
          color: "#fff",
          position: "relative",
          height: "100%",
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
            minHeight: "94px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon sx={{ color: "#fff700", mr: 1 }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ letterSpacing: 1 }}
            >
              Wczytywanie...
            </Typography>
          </Box>
        </Box>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        minWidth: isMobile ? "100%" : 300,
        width: isMobile ? "100%" : 440,
        borderRadius: "18px",
        background: "linear-gradient(to bottom right, #22c55e, #16a34a)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
        border: "4px solid #000",
        overflow: "hidden",
        color: "#fff",
        position: "relative",
        height: "100%",
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
          minHeight: "94px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "#fff700", mr: 1 }} />
          <Typography variant="h6" fontWeight="bold" sx={{ letterSpacing: 1 }}>
            Dzisiaj prowadzi
          </Typography>
        </Box>
      </Box>

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
          {player.name}
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
          <EmojiEventsIcon sx={{ color: "#facc15" }} />+{player.result} pucharów
        </Box>
        <Typography
          mt="16px"
          variant="subtitle1"
          sx={{
            color: "#334155",
            fontWeight: 500,
            mb: 1,
          }}
        >
          Klub: {player.clubName}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="medium"
          sx={{ color: "#1f2937", mb: 2 }}
        >
          Puchary: <span style={{ fontWeight: 700 }}>{player.trophies}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerOfToday;
