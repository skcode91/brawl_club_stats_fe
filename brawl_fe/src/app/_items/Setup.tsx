"use client";

import { queryClient } from "@/services/api/queryClient";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";

const Setup: React.FC<PropsWithChildren> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default Setup;
