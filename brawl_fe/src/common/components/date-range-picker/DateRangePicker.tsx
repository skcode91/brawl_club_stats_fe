"use client";

import React from "react";
import { Stack } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useClubContext } from "@/common/contexts/club-context/ClubContext";
import dayjs, { Dayjs } from "dayjs";

const minDate = dayjs("2025-04-11T09:00:00");

const roundToFullHour = (date: Dayjs | null): Dayjs | null => {
  if (!date) return null;
  return date.minute(0).second(0).millisecond(0);
};

const DateRangePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useClubContext();

  const handleStartChange = (date: Dayjs | null) => {
    setStartDate(roundToFullHour(date));
  };

  const handleEndChange = (date: Dayjs | null) => {
    setEndDate(roundToFullHour(date));
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="center"
    >
      <DateTimePicker
        label="Data początkowa"
        value={startDate}
        onChange={handleStartChange}
        minutesStep={60}
        ampm={false}
        minDate={minDate}
        maxDate={endDate ?? dayjs()}
      />
      <DateTimePicker
        label="Data końcowa"
        value={endDate}
        onChange={handleEndChange}
        minutesStep={60}
        ampm={false}
        minDate={minDate ?? startDate}
        maxDate={dayjs()}
      />
    </Stack>
  );
};

export default DateRangePicker;
