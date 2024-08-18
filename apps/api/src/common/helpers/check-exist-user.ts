import prisma from "../../app/prisma";
import { ResponseError } from "../response-error";

type ExistUser = {
  email: string;
  id: string;
};

export async function checkExistUser({ email, id }: Partial<ExistUser>) {
  const user = await prisma.user.findUnique({
    where: { email, id },
  });
  if (!user) new ResponseError(404, "User not found");
  return user;
}
