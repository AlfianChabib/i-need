/*
  Warnings:

  - You are about to drop the `Classification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Industry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubClassification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyProfile" DROP CONSTRAINT "CompanyProfile_industryId_fkey";

-- DropForeignKey
ALTER TABLE "SubClassification" DROP CONSTRAINT "SubClassification_classificationId_fkey";

-- DropForeignKey
ALTER TABLE "job_classifications" DROP CONSTRAINT "job_classifications_classificationId_fkey";

-- DropForeignKey
ALTER TABLE "job_classifications" DROP CONSTRAINT "job_classifications_subClassificationId_fkey";

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "data" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "jobs" ALTER COLUMN "description" SET DATA TYPE CHAR;

-- DropTable
DROP TABLE "Classification";

-- DropTable
DROP TABLE "Industry";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "SubClassification";

-- CreateTable
CREATE TABLE "classifications" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,

    CONSTRAINT "classifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_classifications" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "classificationId" INTEGER NOT NULL,

    CONSTRAINT "sub_classifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(500) NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "industries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "industries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_title_key" ON "skills"("title");

-- CreateIndex
CREATE INDEX "skills_title_idx" ON "skills"("title");

-- CreateIndex
CREATE UNIQUE INDEX "industries_name_key" ON "industries"("name");

-- AddForeignKey
ALTER TABLE "CompanyProfile" ADD CONSTRAINT "CompanyProfile_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "industries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_classifications" ADD CONSTRAINT "job_classifications_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "classifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_classifications" ADD CONSTRAINT "job_classifications_subClassificationId_fkey" FOREIGN KEY ("subClassificationId") REFERENCES "sub_classifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_classifications" ADD CONSTRAINT "sub_classifications_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "classifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
