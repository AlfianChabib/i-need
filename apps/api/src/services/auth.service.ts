import prisma from "../app/prisma";
import { SendEmail } from "../common/email/send-email";
import { checkExistAccount } from "../common/helpers/check-exist-user";
import { ResponseError } from "../common/response-error";
import { comparePassword, hashPassword } from "../lib/bcrypt/password";
import { hashToken } from "../lib/hash-token";
import { genAuthToken, verifyRefreshToken } from "../lib/jwt/auth-token.jwt";
import { genVerifyToken, verifyVerifyToken } from "../lib/jwt/verification.jwt";

export class AuthService {
  static async registerCandidate(username: string, email: string, password: string) {
    await checkExistAccount(email);

    return await prisma.$transaction(async (tx) => {
      const { hashedPassword, salt } = hashPassword(password);
      const newUser = await tx.user.create({
        data: { username, email, auth: { create: { password: hashedPassword, salt, email } } },
      });

      const { hashedToken, verifyTokenUrl, expiresDate } = genVerifyToken({ email, userId: newUser.id });
      await tx.verifyToken.create({
        data: { userId: newUser.id, token: hashedToken, expiresAt: expiresDate },
      });

      await SendEmail.verifyEmail(email, verifyTokenUrl, expiresDate);
    });
  }

  static async verifyEmail(token: string) {
    const data = verifyVerifyToken(token);
    if (!data) throw new ResponseError(400, "Invalid token");

    await prisma.user.update({ where: { id: data.userId }, data: { isVerified: true } });
  }

  static async login(email: string, password: string) {
    const user = await prisma.user.findFirst({ where: { email }, include: { auth: true } });
    if (!user || !user.auth) throw new ResponseError(400, "Your account is not registered");
    if (!user.isVerified) throw new ResponseError(400, "Your account is not verified, please verify your email");

    const isPasswordCorrect = comparePassword(password, user.auth.password, user.auth.salt);
    if (!isPasswordCorrect) throw new ResponseError(400, "Invalid email or password");

    const token = genAuthToken({ email: user.email, userId: user.id, role: user.role });

    await prisma.authToken.create({
      data: { userId: user.id, refreshToken: token.hashedToken, expiresAt: token.expiresDate },
    });

    return {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    };
  }

  static async getSession(userId: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new ResponseError(400, "User not found");

    return user;
  }

  static async refreshToken(refreshToken: string) {
    const data = verifyRefreshToken(refreshToken);
    if (!data) throw new ResponseError(400, "Invalid token");

    const hashedToken = hashToken(refreshToken);

    const user = await prisma.user.findUnique({ where: { id: data.userId } });
    if (!user) throw new ResponseError(400, "User not found");

    const existToken = await prisma.authToken.findFirst({ where: { userId: user.id, refreshToken: hashedToken } });

    const token = genAuthToken({ email: user.email, userId: user.id, role: user.role });

    return {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    };
  }
}
