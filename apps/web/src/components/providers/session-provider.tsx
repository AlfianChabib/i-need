"use client";

import { AuthService } from "@/services/auth.service";
import { SessionData } from "@/types/auth";
import { initialSession } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useMemo } from "react";

const SessionContext = React.createContext<SessionData | null>(null);

export const useGetSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => AuthService.getSession(),
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useGetSession();

  const session = useMemo(() => {
    if (data) return data;

    return initialSession;
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}

export const useSession = () => {
  if (useContext(SessionContext) === null) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return useContext(SessionContext);
};
