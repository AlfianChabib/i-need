import { cookies } from "next/headers";

export const getToken = () => {
  const token = cookies().get("accessToken");
  if (!token) {
    return null;
  }
  return token.value;
};
