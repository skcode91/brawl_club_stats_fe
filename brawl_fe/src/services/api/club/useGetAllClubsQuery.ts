import { useQuery } from "react-query";
import type { UseQueryOptions } from "react-query";

import type { ClubBaseInfoDto } from "./dto";
import api from "..";

type UseClubGetAllQueryProps = {
  options?: UseQueryOptions<ClubBaseInfoDto[], Error>;
};

const useClubGetAllQuery = (props?: UseClubGetAllQueryProps) =>
  useQuery<ClubBaseInfoDto[], Error>(
    ["club", "getClubs"],
    async () => {
      const response = await api.club.getAll();
      return response.data;
    },
    props?.options
  );

export default useClubGetAllQuery;
