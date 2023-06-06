/*
  Warnings:

  - You are about to drop the column `definitionIds` on the `Topic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Definition" ADD COLUMN     "topicId" TEXT;

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "definitionIds";

-- AddForeignKey
ALTER TABLE "Definition" ADD CONSTRAINT "Definition_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
