"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Button,
  CircularProgress,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ClubSelect from "@/common/components/club-select/ClubSelect";
import { useClubContext } from "@/common/contexts/club-context/ClubContext";
import dayjs, { Dayjs } from "dayjs";
import useClubGetClubPeriodStatsQuery from "@/services/api/club/useGetClubPeriodStatsQuery";
import DateRangePicker from "@/common/components/date-range-picker/DateRangePicker";

const Progress: React.FC = () => {
  const { activeTag, startDate, endDate } = useClubContext();

  const isValidRange = startDate && endDate && startDate.isBefore(endDate);

  const { data, isLoading } = useClubGetClubPeriodStatsQuery({
    params: {
      ClubTag: activeTag,
      PeriodStart: startDate?.toDate() ?? new Date(),
      PeriodEnd: endDate?.toDate() ?? new Date(),
    },
    options: {
      enabled: !!startDate && !!endDate && !!isValidRange,
    },
  });

  return (
    <Stack spacing={3}>
      <ClubSelect />
      <DateRangePicker />

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
          <CircularProgress />
        </Box>
      ) : data?.players ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Gracz</TableCell>
                <TableCell align="right">Puchary na start</TableCell>
                <TableCell align="right">Puchary na koniec</TableCell>
                <TableCell align="right">Zmiana</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.players.map((item) => {
                const { playerOnStart, playerOnEnd } = item;
                const change = playerOnEnd.result;

                return (
                  <TableRow key={playerOnStart.tag}>
                    <TableCell>
                      <Typography fontWeight="bold">
                        {playerOnStart.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {playerOnStart.tag}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {playerOnStart.trophies}
                    </TableCell>
                    <TableCell align="right">{playerOnEnd.trophies}</TableCell>
                    <TableCell align="right">
                      {change >= 0 ? `+${change}` : change}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
          Brak danych dla wybranego okresu.
        </Typography>
      )}
    </Stack>
  );
};

export default Progress;
