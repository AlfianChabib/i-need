import { sign, verify } from "jsonwebtoken";
import dayjs from "dayjs";
import { ResponseError } from "../../common/response-error";
import { hashToken } from "../hash-token";
import { Role } from "@prisma/client";

export type TokenData = {
  email: string;
  userId: string;
  role: Role;
};

export const genAccessToken = (data: TokenData) => {
  return sign(data, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: process.env.LIFETIME_ACCESS_TOKEN,
    algorithm: "HS256",
  });
};

export const genRefreshToken = (userId: string) => {
  return sign({ userId }, process.env.SECRET_REFRESH_TOKEN, {
    expiresIn: process.env.LIFETIME_REFRESH_TOKEN,
    algorithm: "HS256",
  });
};

export const genAuthToken = (data: TokenData) => {
  const accessToken = genAccessToken(data);
  const refreshToken = genRefreshToken(data.userId);
  const hashedToken = hashToken(refreshToken);
  const expiresDate = dayjs().add(30, "days").toDate();

  return { accessToken, refreshToken, hashedToken, expiresDate };
};

export const verifyAccessToken = (token: string) => {
  try {
    return verify(token, process.env.SECRET_ACCESS_TOKEN, {
      algorithms: ["HS256"],
    }) as TokenData;
  } catch (error) {
    if (error instanceof Error) {
      throw new ResponseError(400, "Invalid token");
    }
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    return verify(token, process.env.SECRET_REFRESH_TOKEN, {
      algorithms: ["HS256"],
    }) as TokenData;
  } catch (error) {
    if (error instanceof Error) {
      throw new ResponseError(400, "Invalid token");
    }
  }
};
