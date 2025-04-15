import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  CircularProgress,
  Box,
} from "@mui/material";
import useClubGetAllQuery from "@/services/api/club/useGetAllClubsQuery";
import { useClubContext } from "@/common/contexts/club-context/ClubContext";

const Header = () => {
  const { activeTag, setActiveTag } = useClubContext();
  const { data: clubs, isLoading } = useClubGetAllQuery();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTag(newValue === "general" ? undefined : newValue);
  };

  return (
    <AppBar position="sticky" elevation={4}>
      <Toolbar>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={activeTag ?? "general"}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="General" value="general" />
              {clubs?.map((club) => (
                <Tab key={club.tag} label={club.name} value={club.tag} />
              ))}
            </Tabs>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
