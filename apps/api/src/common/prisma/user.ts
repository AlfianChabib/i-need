import { Prisma, PrismaClient } from "@prisma/client";
import { ResponseError } from "../response-error";
import prisma from "../../app/prisma";
import { DefaultArgs } from "@prisma/client/runtime/library";

class Users {
  constructor(private readonly prismaUser: PrismaClient["user"]) {}

  async findUniqueId(id: string, args: Omit<Prisma.UserFindUniqueArgs<DefaultArgs>, "where">) {
    const user = await this.prismaUser.findUnique({ where: { id }, ...args });
    if (!user) throw new ResponseError(404, "User not found");
    return user;
  }

  async findUniqueEmail(email: string) {
    const user = await this.prismaUser.findUnique({ where: { email } });
    if (!user) throw new ResponseError(404, "User not found");
    return user;
  }
}

const users = new Users(prisma.user);

export default users;
