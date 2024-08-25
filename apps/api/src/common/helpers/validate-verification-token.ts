import prisma from "../../app/prisma";
import { hashToken } from "../../lib/hash-token";
import { ResponseError } from "../response-error";

export async function validateVerificationToken(token: string) {
  const hashedToken = hashToken(token);

  const existToken = await prisma.verifyToken.findUnique({
    where: {
      token: hashedToken,
      isUsed: false,
      expiresAt: { gte: new Date() },
    },
  });
  console.log(existToken);
  if (!existToken) throw new ResponseError(400, "Invalid token");

  return existToken;
}
