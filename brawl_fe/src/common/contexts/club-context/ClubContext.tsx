import React, { createContext, useContext, useState } from "react";

interface ClubContextType {
  activeTag: string | undefined;
  setActiveTag: (tag: string | undefined) => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export const ClubProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);

  return (
    <ClubContext.Provider value={{ activeTag, setActiveTag }}>
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
