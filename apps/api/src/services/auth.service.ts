import prisma from "../app/prisma";
import { SendEmail } from "../common/email/send-email";
import { checkExistAccount } from "../common/helpers/check-exist-user";
import { ResponseError } from "../common/response-error";
import { hashPassword } from "../lib/bcrypt/password";
import { genVerifyToken } from "../lib/jwt/verification.jwt";

export class AuthService {
  static async registerCandidate(username: string, email: string, password: string) {
    await checkExistAccount(email);

    return await prisma.$transaction(async (tx) => {
      const { hashedPassword, salt } = hashPassword(password);
      const newUser = await tx.user.create({
        data: { username, email, auth: { create: { password: hashedPassword, salt, email } } },
      });

      const { token, verifyTokenUrl, expiresDate } = genVerifyToken(email);
      await tx.verifyToken.create({
        data: { userId: newUser.id, token, expiresAt: expiresDate },
      });

      await SendEmail.verifyEmail(email, verifyTokenUrl, expiresDate);
    });
  }
}
