import { useQuery } from "react-query";
import type { UseQueryOptions } from "react-query";

import api from "..";
import { ClubGetClubPeriodStatsParams } from "./club";
import { ClubPeriodDto } from "./dto";

type UseClubGetClubPeriodStatsQueryProps = {
  params: ClubGetClubPeriodStatsParams;
  options?: UseQueryOptions<ClubPeriodDto, Error>;
};

const useClubGetClubPeriodStatsQuery = (
  props: UseClubGetClubPeriodStatsQueryProps
) =>
  useQuery<ClubPeriodDto, Error>(
    [
      "club",
      "getClubPeriodStats",
      props.params.ClubTag,
      props.params.PeriodStart,
      props.params.PeriodEnd,
    ],
    async () => {
      const response = await api.club.getClubPeriodStats(props.params);
      return response.data;
    },
    props?.options
  );

export default useClubGetClubPeriodStatsQuery;
