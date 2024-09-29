"use server";

import { env } from "@/lib/env";
import { ApiResponse } from "@/types/server";

export async function verifyEmail(token: string): Promise<ApiResponse> {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_HOST}/auth/verify`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      cache: "no-store",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) error.cause = { nextNoDigest: true, originalCause: error.cause };
    throw error;
  }
}
