import { SendEmail } from "../common/email/send-email";
import { checkExistUser } from "../common/helpers/check-exist-user";

export class AuthService {
  static async registerCandidate(username: string, email: string, password: string) {
    const user = await checkExistUser({ email });
    const url = `${process.env.FRONTEND_URL}/sign-up/verify?token=${email}`;

    await SendEmail.verifyEmail(email, url);
  }
}
