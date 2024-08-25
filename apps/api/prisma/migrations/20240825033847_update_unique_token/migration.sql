/*
  Warnings:

  - A unique constraint covering the columns `[refreshToken]` on the table `AuthToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `VerifyToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AuthToken_refreshToken_key` ON `AuthToken`(`refreshToken`);

-- CreateIndex
CREATE UNIQUE INDEX `VerifyToken_token_key` ON `VerifyToken`(`token`);
