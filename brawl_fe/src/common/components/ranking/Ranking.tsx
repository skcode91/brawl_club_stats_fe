import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Box,
  CircularProgress,
} from "@mui/material";
import { PlayerRankingDto } from "@/services/api/club/dto";

export interface RankingProps {
  title: string;
  players?: PlayerRankingDto[];
  isLoading: boolean;
}

const Ranking: React.FC<RankingProps> = ({ title, players, isLoading }) => {
  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
          <CircularProgress />
        </Box>
      ) : players && players.length > 0 ? (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Player</TableCell>
                <TableCell>Club</TableCell>
                <TableCell align="right">Trophies</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.tag}>
                  <TableCell>{player.rank}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar>{player.name[0]}</Avatar>
                      <Box>
                        <Typography fontWeight="bold">{player.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {player.tag}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography>{player.clubName}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {player.clubTag}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">{player.trophies}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
          No players found.
        </Typography>
      )}
    </Box>
  );
};

export default Ranking;
