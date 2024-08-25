export default function useVerify() {
  return async function verify(token: string) {
    const res = await fetch(`/api/auth/verify/${token}`);
    if (!res.ok) {
      throw new Error("Failed to verify token");
    }
    return res.json();
  };
}
