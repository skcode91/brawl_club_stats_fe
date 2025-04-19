import PlayerOfDay from "@/common/components/player-of-day/PlayerOfDay";
import PlayerOfToday from "@/common/components/player-of-today/PlayerOfToday";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

const page = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "16px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box
          sx={{
            position: "relative",
            width: 300,
            height: 300,
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
        <PlayerOfDay />
        <PlayerOfToday />
      </Stack>
    </Box>
  );
};

export default page;
