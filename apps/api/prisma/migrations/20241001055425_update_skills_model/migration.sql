-- AlterTable
ALTER TABLE `skills` MODIFY `title` VARCHAR(500) NOT NULL;

-- CreateIndex
CREATE INDEX `skills` ON `skills`(`title`);
