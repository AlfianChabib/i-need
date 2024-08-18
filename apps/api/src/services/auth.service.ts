import { checkExistUser } from "../common/helpers/check-exist-user";

export class AuthService {
  static async registerCandidate(username: string, email: string, password: string) {
    const user = await checkExistUser({ email });
  }
}
