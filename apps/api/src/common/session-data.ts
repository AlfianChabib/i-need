import { Auth, User } from "@prisma/client";

export function toSessionData(user: User & { auth: Auth | null }) {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    role: user.role,
    isVerified: user.isVerified,
  } as User;
}
