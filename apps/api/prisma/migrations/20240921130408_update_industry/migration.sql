/*
  Warnings:

  - You are about to alter the column `industryId` on the `CompanyProfile` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `Industry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CompanyProfile` DROP FOREIGN KEY `CompanyProfile_industryId_fkey`;

-- AlterTable
ALTER TABLE `CompanyProfile` MODIFY `industryId` INTEGER NULL;

-- DropTable
DROP TABLE `Industry`;

-- CreateTable
CREATE TABLE `industries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `industries_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CompanyProfile` ADD CONSTRAINT `CompanyProfile_industryId_fkey` FOREIGN KEY (`industryId`) REFERENCES `industries`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
