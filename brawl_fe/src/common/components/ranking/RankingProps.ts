import { PlayerRankingDto } from "@/services/api/club/dto";

export interface RankingProps {
  title: string;
  players?: PlayerRankingDto[];
  isLoading: boolean;
}
