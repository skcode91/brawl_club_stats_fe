"use client";

import { queryClient } from "@/services/api/queryClient";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";
import { ClubProvider } from "@/common/contexts/club-context/ClubContext";
import { plPL } from "@mui/x-date-pickers/locales";

const Setup: React.FC<PropsWithChildren> = (props) => {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={
              plPL.components.MuiLocalizationProvider.defaultProps.localeText
            }
          >
            <ClubProvider>{props.children}</ClubProvider>
          </LocalizationProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Setup;
