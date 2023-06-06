/*
  Warnings:

  - You are about to drop the column `profileId` on the `Topic` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_profileId_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "learnedTopics" INTEGER[] DEFAULT ARRAY[]::INTEGER[];

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "profileId";
