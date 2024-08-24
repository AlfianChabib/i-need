"use client";

import { AuthService } from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { parseCookies } from "nookies";

interface SessionData {
  email: string;
  userId: string;
  role: string;
  isVerified: boolean;
}

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
  const { data: session, isLoading } = useGetSession();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}

export const useSession = () => {
  if (useContext(SessionContext) === null) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return useContext(SessionContext);
};
