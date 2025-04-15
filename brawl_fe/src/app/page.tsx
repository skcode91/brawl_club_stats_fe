"use client";

import BasicLayout from "@/common/components/basic-layout/BasicLayout";
import CollapsedComponent from "@/common/components/mui/collapsed-component/CollapsedCompoent";
import Ranking from "@/common/components/ranking/Ranking";
import { useClubContext } from "@/common/contexts/club-context/ClubContext";
import useGetClubRankingQuery from "@/services/api/club/useGetClubRankingQuery";

export default function Home() {
  const { activeTag } = useClubContext();

  const { data: players, isLoading } = useGetClubRankingQuery({
    urlParams: {
      Tag: activeTag,
    },
  });

  return (
    <BasicLayout>
      <Ranking title="Ranking" players={players} isLoading={isLoading} />
    </BasicLayout>
  );
}
