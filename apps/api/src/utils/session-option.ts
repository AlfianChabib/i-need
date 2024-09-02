import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { SessionOptions } from "express-session";
import prisma from "../app/prisma";
import { env } from "../app/config";

export const sessionOptions: SessionOptions = {
  secret: env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  name: "session.id",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }),
};
