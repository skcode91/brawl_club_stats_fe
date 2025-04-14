"use client";

import { useMemo } from "react";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryDelay: () => 2000,
      staleTime: 1000 * 60,
      retry: (failureCount, error) => {
        return failureCount < 1;
      },
    },
  },
});
