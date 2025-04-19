"use client";
import ClubSelect from "@/common/components/club-select/ClubSelect";
import Ranking from "@/common/components/ranking/Ranking";
import { useClubContext } from "@/common/contexts/club-context/ClubContext";
import useGetClubRankingQuery from "@/services/api/club/useGetClubRankingQuery";
import { Stack } from "@mui/material";
import React from "react";

const page = () => {
  const { activeTag } = useClubContext();

  const { data: players, isLoading } = useGetClubRankingQuery({
    urlParams: {
      Tag: activeTag,
    },
  });

  return (
    <Stack>
      <ClubSelect />
      <Ranking title="Ranking" players={players} isLoading={isLoading} />
    </Stack>
  );
};

export default page;
