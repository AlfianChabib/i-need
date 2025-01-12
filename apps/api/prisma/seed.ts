import { PrismaClient } from "@prisma/client";
import seedIndustries from "./seeds/industries.json";
import classification from "./seeds/classification.json";
import skillsData from "./seeds/skillsData.json";

type Skill = {
  text: string;
  label: string;
};

const prisma = new PrismaClient({
  datasources: { db: { url: `${process.env.DATABASE_URL}&connection_limit=60&pool_timeout=0` } },
});

const skills: Array<Skill> = skillsData as unknown as Array<Skill>;

async function main() {
  try {
    prisma.$connect();
    console.log("Seeding started...");

    seedIndustries.map(async (data) => {
      await prisma.industry.upsert({
        where: { name: data.name },
        create: { name: data.name, label: data.label },
        update: {},
      });
    });

    classification.preferredClassificationOptions.map(async (data) => {
      await prisma.classification.upsert({
        where: { title: data.description, id: data.id },
        create: {
          title: data.description,
          id: data.id,
          subClassification: {
            create: data.subClassifications.map((subClassification) => ({ title: subClassification.description })),
          },
        },
        update: {},
      });
    });

    skills.map(async (data) => {
      await prisma.skill.upsert({
        where: { title: data.text },
        create: { title: data.text },
        update: {},
      });
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seeding completed successfully");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
