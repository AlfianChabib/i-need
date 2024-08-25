"use server";

import { ApiResponse } from "@/types/server";

const API_URL = process.env.NEXT_PUBLIC_API_HOST;

export async function verifyEmail(token: string): Promise<ApiResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/verify`, {
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
