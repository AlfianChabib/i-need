import App from "./app/app";
import { env } from "./app/config";
import prisma from "./app/prisma";

const main = () => {
  prisma.$connect();

  const app = new App();
  app.start(env.PORT);
};

main();
