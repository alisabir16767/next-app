/*
  Warnings:

  - You are about to drop the `Follower` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Follower` DROP FOREIGN KEY `Follower_followerId_fkey`;

-- DropForeignKey
ALTER TABLE `Follower` DROP FOREIGN KEY `Follower_userId_fkey`;

-- DropTable
DROP TABLE `Follower`;
