import _instance from "../_instance";
import { ClubBaseInfoDto, ClubPeriodDto, PlayerRankingDto } from "./dto";

export type ClubGetRankingParams = {
  Tag?: string;
};

export type ClubGetClubPeriodStatsParams = {
  ClubTag?: string;
  PeriodStart: Date;
  PeriodEnd: Date;
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
  getClubPeriodStats: async (params: ClubGetClubPeriodStatsParams) => {
    return _instance.get<ClubPeriodDto>("/club-period-stats", {
      params,
    });
  },
};

export default club;
