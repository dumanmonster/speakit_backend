/*
  Warnings:

  - You are about to drop the `DefinitionOnTopics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DefinitionOnTopics" DROP CONSTRAINT "DefinitionOnTopics_definitionId_fkey";

-- DropForeignKey
ALTER TABLE "DefinitionOnTopics" DROP CONSTRAINT "DefinitionOnTopics_topicId_fkey";

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "definitionsId" INTEGER[] DEFAULT ARRAY[]::INTEGER[];

-- DropTable
DROP TABLE "DefinitionOnTopics";
