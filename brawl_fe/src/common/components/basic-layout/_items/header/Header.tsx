"use client";
import React, { useMemo } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  CircularProgress,
  Box,
  useTheme,
} from "@mui/material";
import useClubGetAllQuery from "@/services/api/club/useGetAllClubsQuery";
import { useClubContext } from "@/common/contexts/club-context/ClubContext";
import { usePathname, useRouter } from "next/navigation";

interface TabItem {
  label: string;
  value: string;
}

const tabItems: TabItem[] = [
  { label: "General", value: "general" },
  { label: "Ranking", value: "ranking" },
  { label: "Progress", value: "progress" },
];

const defaultTab = tabItems[0].value;

const Header = () => {
  const { data: clubs, isLoading } = useClubGetAllQuery();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const goToTab = (tab?: TabItem) => {
    if (!tab) return;
    router.push(`/${tab.value}`);
  };

  const activePage = useMemo(() => {
    const path = pathname.split("/").pop();
    console.log("path", path);
    return tabItems.find((item) => item.value === path);
  }, [pathname]);

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        width: "100%",
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
        zIndex: 1100,
      }}
    >
      <Toolbar>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={activePage?.value ?? defaultTab}
              textColor="inherit"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTab-root": {
                  fontWeight: "bold",
                  color: "#fff",
                  transition: "all 0.3s ease",
                },
                "& .MuiTab-root:hover": {
                  color: theme.palette.primary.main,
                },
                "& .Mui-selected": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              {tabItems.map((item) => (
                <Tab
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  onClick={() => goToTab(item)}
                />
              ))}
            </Tabs>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
