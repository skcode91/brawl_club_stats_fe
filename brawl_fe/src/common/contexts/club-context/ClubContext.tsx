"use client";

import React, { createContext, useContext, useState } from "react";
import { Dayjs } from "dayjs";

interface ClubContextType {
  activeTag: string | undefined;
  setActiveTag: (tag: string | undefined) => void;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setStartDate: (date: Dayjs | null) => void;
  setEndDate: (date: Dayjs | null) => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export const ClubProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  return (
    <ClubContext.Provider
      value={{
        activeTag,
        setActiveTag,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </ClubContext.Provider>
  );
};

export const useClubContext = () => {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error("useClubContext must be used within a ClubProvider");
  }
  return context;
};
