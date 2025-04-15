import _instance from "../_instance";
import { ClubBaseInfoDto, PlayerRankingDto } from "./dto";

export type ClubGetRankingParams = {
  Tag?: string;
};

const club = {
  getAll: async () => {
    return _instance.get<ClubBaseInfoDto[]>("/clubs");
  },
  getRanking: async (params: ClubGetRankingParams) => {
    return _instance.get<PlayerRankingDto[]>("/club/ranking", {
      params,
    });
  },
};

export default club;
