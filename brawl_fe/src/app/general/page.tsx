"use client";
import PlayerOfDay from "@/common/components/player-of-day/PlayerOfDay";
import PlayerOfToday from "@/common/components/player-of-today/PlayerOfToday";
import useIsMobileResolution from "@/hooks/useIsMobileResolution";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

const page = () => {
  const isMobile = useIsMobileResolution();

  return (
    <Box sx={{ minHeight: "100vh", padding: "16px" }}>
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems="stretch"
        justifyContent="space-between"
        gap="16px"
      >
        <Box
          sx={{
            position: "relative",
            width: isMobile ? "100%" : 300,
            aspectRatio: "1 / 1",
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/logo-big.png"
            alt="LTX Team Logo"
            fill
            style={{
              borderRadius: "16px",
              border: "3px solid #000",
              boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box sx={{ width: isMobile ? "100%" : "auto", flex: 1 }}>
          <PlayerOfDay />
        </Box>

        <Box sx={{ width: isMobile ? "100%" : "auto", flex: 1 }}>
          <PlayerOfToday />
        </Box>
      </Stack>
    </Box>
  );
};

export default page;
