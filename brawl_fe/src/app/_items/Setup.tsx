"use client";

import { queryClient } from "@/services/api/queryClient";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";
import { ClubProvider } from "@/common/contexts/club-context/ClubContext";

const Setup: React.FC<PropsWithChildren> = (props) => {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ClubProvider>{props.children}</ClubProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Setup;
