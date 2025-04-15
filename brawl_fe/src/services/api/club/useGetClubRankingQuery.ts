import { useQuery } from "react-query";
import type { UseQueryOptions } from "react-query";

import type { ClubBaseInfoDto, PlayerRankingDto } from "./dto";
import api from "..";
import { ClubGetRankingParams } from "./club";

type UseClubGetRangingQueryProps = {
  options?: UseQueryOptions<PlayerRankingDto[], Error>;
  urlParams: ClubGetRankingParams;
};

const useGetClubRankingQuery = (props: UseClubGetRangingQueryProps) =>
  useQuery<PlayerRankingDto[], Error>(
    ["club", "getRanking", props?.urlParams.Tag],
    async () => {
      const response = await api.club.getRanking(props.urlParams);
      return response.data;
    },
    props.options
  );

export default useGetClubRankingQuery;
