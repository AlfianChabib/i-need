import App from "./app/app";
import prisma from "./app/prisma";

const main = () => {
  prisma.$connect();

  const app = new App();
  app.start();
};

main();
