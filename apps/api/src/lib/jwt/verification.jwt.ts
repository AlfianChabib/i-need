import { TokenExpiredError, sign, verify } from "jsonwebtoken";
import dayjs from "dayjs";
import { ResponseError } from "../../common/response-error";
import { hashToken } from "../hash-token";

type VerifyTokenData = {
  email: string;
  userId: string;
};

export const genVerifyToken = (data: VerifyTokenData) => {
  const expiresDate = dayjs().add(1, "hour").toDate();
  const token = sign(data, process.env.SECRET_VERIFICATION_TOKEN, {
    expiresIn: process.env.LIFETIME_VERIFICATION_TOKEN,
    algorithm: "HS256",
  });
  const hashedToken = hashToken(token);
  const verifyTokenUrl = `${process.env.FRONTEND_URL}/sign-up/verify?token=${token}`;

  return { token, hashedToken, expiresDate, verifyTokenUrl };
};

export const verifyVerifyToken = (token: string) => {
  try {
    return verify(token, process.env.SECRET_VERIFICATION_TOKEN, {
      algorithms: ["HS256"],
    }) as VerifyTokenData;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      if (error.name === "TokenExpiredError") {
        throw new ResponseError(400, "This token is expired, please request a new one");
      } else {
        throw new ResponseError(400, "Invalid token");
      }
    }
  }
};
