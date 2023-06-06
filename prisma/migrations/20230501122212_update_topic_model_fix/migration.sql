/*
  Warnings:

  - You are about to drop the `_DefinitionToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DefinitionToTopic" DROP CONSTRAINT "_DefinitionToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_DefinitionToTopic" DROP CONSTRAINT "_DefinitionToTopic_B_fkey";

-- DropTable
DROP TABLE "_DefinitionToTopic";
