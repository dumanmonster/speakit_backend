/*
  Warnings:

  - You are about to drop the column `definitionsId` on the `Topic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "definitionsId",
ADD COLUMN     "definitionIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[];
