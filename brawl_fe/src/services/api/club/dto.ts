export interface ClubBaseInfoDto {
  tag: string;
  name: string;
}

export interface PlayerDto {
  tag: string;
  name: string;
  trophies: number;
  role: string;
}

export interface PlayerDetailsDto extends PlayerDto {
  clubTag: string;
  clubName: string;
}

export interface PlayerRankingDto extends PlayerDetailsDto {
  rank: number;
}
