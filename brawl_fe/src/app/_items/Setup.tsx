"use client";

import { queryClient } from "@/services/api/queryClient";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";

import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";

const Setup: React.FC<PropsWithChildren> = (props) => {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Setup;
