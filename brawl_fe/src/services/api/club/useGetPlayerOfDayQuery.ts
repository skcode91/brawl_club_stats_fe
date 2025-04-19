import { useQuery } from "react-query";
import type { UseQueryOptions } from "react-query";
import api from "..";
import { ClubGetPlayerOfDayParams } from "./club";
import { PlayerOfPeriodDto } from "./dto";

type UseClubGetPlayerOfDayQueryProps = {
  params: ClubGetPlayerOfDayParams;
  options?: UseQueryOptions<PlayerOfPeriodDto, Error>;
};

const useClubGetPlayerOfDayQuery = (props: UseClubGetPlayerOfDayQueryProps) =>
  useQuery<PlayerOfPeriodDto, Error>(
    ["club", "getPlayerOfDay", props.params.ClubTag, props.params.Date],
    async () => {
      const response = await api.club.getPlayerOfDay(props.params);
      return response.data;
    },
    props?.options
  );

export default useClubGetPlayerOfDayQuery;
