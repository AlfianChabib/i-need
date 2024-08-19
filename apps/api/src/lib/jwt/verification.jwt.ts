import { sign, verify } from "jsonwebtoken";
import dayjs from "dayjs";

export const genVerifyToken = (email: string) => {
  const expiresDate = dayjs().add(1, "hour").toDate();
  const token = sign({ email }, process.env.SECRET_VERIFICATION_TOKEN, {
    expiresIn: process.env.LIFETIME_VERIFICATION_TOKEN,
    algorithm: "HS256",
  });
  const verifyTokenUrl = `${process.env.FRONTEND_URL}/sign-up/verify?token=${token}`;

  return { token, expiresDate, verifyTokenUrl };
};

export const verifyVerifyToken = (token: string) => {
  return verify(token, process.env.SECRET_VERIFICATION_TOKEN, {
    algorithms: ["HS256"],
  });
};
