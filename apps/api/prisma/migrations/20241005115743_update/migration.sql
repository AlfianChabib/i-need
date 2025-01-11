/*
  Warnings:

  - Made the column `jobId` on table `interviews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `classificationId` on table `job_classifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subClassificationId` on table `job_classifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `classificationId` on table `sub_classifications` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `interviews` DROP FOREIGN KEY `interviews_jobId_fkey`;

-- DropForeignKey
ALTER TABLE `job_classifications` DROP FOREIGN KEY `job_classifications_classificationId_fkey`;

-- DropForeignKey
ALTER TABLE `job_classifications` DROP FOREIGN KEY `job_classifications_subClassificationId_fkey`;

-- DropForeignKey
ALTER TABLE `sub_classifications` DROP FOREIGN KEY `sub_classifications_classificationId_fkey`;

-- AlterTable
ALTER TABLE `interviews` MODIFY `jobId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `job_classifications` MODIFY `classificationId` INTEGER NOT NULL,
    MODIFY `subClassificationId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sub_classifications` MODIFY `classificationId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `interviews` ADD CONSTRAINT `interviews_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `jobs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `job_classifications` ADD CONSTRAINT `job_classifications_classificationId_fkey` FOREIGN KEY (`classificationId`) REFERENCES `classifications`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `job_classifications` ADD CONSTRAINT `job_classifications_subClassificationId_fkey` FOREIGN KEY (`subClassificationId`) REFERENCES `sub_classifications`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sub_classifications` ADD CONSTRAINT `sub_classifications_classificationId_fkey` FOREIGN KEY (`classificationId`) REFERENCES `classifications`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
