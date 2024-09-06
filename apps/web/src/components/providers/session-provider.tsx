"use client";

import { useContext, useMemo, ReactNode, createContext } from "react";
import { AuthService } from "@/services/auth.service";
import { SessionData } from "@/types/auth";
import { initialSession } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/app/loading";

const SessionContext = createContext<SessionData | null>(null);

export const useGetSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: AuthService.getSession,
    gcTime: 1000 * 60 * 10,
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

export default function SessionProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = useGetSession();

  const session = useMemo(() => {
    if (data) return data;
    return initialSession;
  }, [data]);

  if (isLoading) return <Loading />;

  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}

export const useSession = () => {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return session;
};
