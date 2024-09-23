import { PrismaClient } from "@prisma/client";
import seedIndustries from "./seeds/industries.json";

const prisma = new PrismaClient();

async function main() {
  try {
    const industries = await prisma.industry.createMany({
      data: seedIndustries,
    });

    Promise.all([industries]);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main()
  .then(async () => {
    console.log("Seeding completed successfully");
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
