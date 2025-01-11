-- DropIndex
DROP INDEX `skills_title_key` ON `skills`;

-- RenameIndex
ALTER TABLE `skills` RENAME INDEX `skills` TO `skills_title_idx`;
